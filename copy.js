var http = require('http'), settings = require('./settings.js').settings, fs = require('fs')

var session = {}
var dump = {Accounts: {}}
var exports = []
var counters = {}

var setupSession = function(apikey) {
	var options = settings.source()
	options.path += 'account.svc/session'
	options.method = 'PUT'
	var put_data = JSON.stringify({
		"ApiKey": apikey,
		"IsNonSliding": false,
		"UsageCount": -1,
		"WindowTime": 120
	})
	options.headers = {
		'Content-Type': 'application/json',
		'Content-Length': put_data.length
	}
    var result = '';
	var request = http.request(options, function(res) {
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			var sessionResult = JSON.parse(result)
			
			session[apikey] = sessionResult.Session.SessionKey
			console.log('-> Created session for source account.')
			
			dump.Accounts[apikey] = {Blueprints: {}}
			counters[apikey] = {};
			fetchDeployments(apikey)
		})
	})
	
	request.write(put_data)
	request.end()
}

var fetchDeployments = function(apikey) {
	var options = settings.source()
	options.path += 'deployment.svc/find/all?session=' + session[apikey]
	options.headers = {
		'Content-Type': 'application/json'
	}
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			result = JSON.parse(result)
			
			for (var x=0;x<result.Deployments.length;x=x+1) {
				console.log('---> Fetching blueprint for deployment: ' + result.Deployments[x].Name)
				fetchBlueprint(apikey, result.Deployments[x].BlueprintId)
			}
		})
	})
	request.end()
}

var fetchBlueprint = function(apikey, bId) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			result = JSON.parse(result)
			
			if (!result.Blueprint) return
			dump.Accounts[apikey].Blueprints[result.Blueprint.Name] = result.Blueprint
			
			// initialize the counts
			counters[apikey][result.Blueprint.Name] = {
				schemaTotal: 0,
				schemaDone: 0,
				relationTotal: 0,
				relationDone: 0,
				listTotal: 0,
				listDone: 0
			}
			
			// fetch the schemas 
			console.log('------> Fetching schemas for blueprint: ' + result.Blueprint.Name)
			fetchSchemas(apikey, result.Blueprint.Id, result.Blueprint.Name)
			
			// fetch the relations
			console.log('------> Fetching relations for blueprint: ' + result.Blueprint.Name)
			fetchRelations(apikey, result.Blueprint.Id, result.Blueprint.Name)
			
			// fetch the lists
			console.log('------> Fetching lists for blueprint: ' + result.Blueprint.Name)
			fetchLists(apikey, result.Blueprint.Id, result.Blueprint.Name)
		})
	})
	request.end()
}

var fetchSchemas = function(apikey, bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/schemas?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			result = JSON.parse(result)
			
			counters[apikey][bName].schemaTotal = result.Schemas.length
			for (var x=0;x<result.Schemas.length;x=x+1) {
				if (!dump.Accounts[apikey].Blueprints[bName].Schemas) dump.Accounts[apikey].Blueprints[bName].Schemas = {}
				dump.Accounts[apikey].Blueprints[bName].Schemas[result.Schemas[x].Name] = result.Schemas[x]
				fetchSchemaProperties(apikey, bId, bName, result.Schemas[x].Name)
			}
		})
	})
	request.end()
}

var fetchSchemaProperties = function(apikey, bId, bName, sName) {
	var options = settings.source()
	options.path += 'schema.svc/' + bId + '/' + sName + '/properties?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			result = JSON.parse(result)
			dump.Accounts[apikey].Blueprints[bName].Schemas[sName].Properties = result.Properties
			counters[apikey][bName].schemaDone = counters[apikey][bName].schemaDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var fetchRelations = function(apikey, bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/relations?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			result = JSON.parse(result)
			
			counters[apikey][bName].relationTotal = result.Relations.length
			for (var x=0;x<result.Relations.length;x=x+1) {
				if (!dump.Accounts[apikey].Blueprints[bName].Relations) dump.Accounts[apikey].Blueprints[bName].Relations = {}
				dump.Accounts[apikey].Blueprints[bName].Relations[result.Relations[x].Name] = result.Relations[x]
				fetchRelationProperties(apikey, bId, bName, result.Relations[x].Name)
			}
		})
	})
	request.end()
}

var fetchRelationProperties = function(apikey, bId, bName, rName) {
	var options = settings.source()
	options.path += 'relation.svc/' + bId + '/' + rName + '/properties?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			result = JSON.parse(result)
			dump.Accounts[apikey].Blueprints[bName].Relations[rName].Properties = result.Properties
			counters[apikey][bName].relationDone = counters[apikey][bName].relationDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var fetchLists = function(apikey, bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/lists?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			result = JSON.parse(result)
			
			counters[apikey][bName].listTotal = result.Lists.length
			for (var x=0;x<result.Lists.length;x=x+1) {
				if (!dump.Accounts[apikey].Blueprints[bName].Lists) dump.Accounts[apikey].Blueprints[bName].Lists = {}
				dump.Accounts[apikey].Blueprints[bName].Lists[result.Lists[x].Name] = result.Lists[x]
				fetchListItems(apikey, bId, bName, result.Lists[x].Name)
			}
		})
	})
	request.end()
}

var fetchListItems = function(apikey, bId, bName, lName) {
	var options = settings.source()
	options.path += 'list.svc/' + bId + '/' + lName + '/contents?session=' + session[apikey]
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			result = JSON.parse(result)
			dump.Accounts[apikey].Blueprints[bName].Lists[lName].Items = result.ListItems
			counters[apikey][bName].listDone = counters[apikey][bName].listDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var checkAllDone = function() {
	var accTotal = accDone = bTotal = bDone = 0
	for (var apikey in counters) {
		accTotal = accTotal + 1
		for (var bId in counters[apikey]) {
			bTotal = bTotal + 1
			if (counters[apikey][bId].schemaTotal == counters[apikey][bId].schemaDone && counters[apikey][bId].relationTotal == counters[apikey][bId].relationDone && counters[apikey][bId].listTotal == counters[apikey][bId].listDone) {
				bDone = bDone + 1
			}
		}
		if (bTotal == bDone) {
			accDone = accDone + 1
			bTotal = bDone = 0
		}
	}
	if (accTotal == accDone) writeDump()
}

var accountsDone = 0
var accountsTotal = settings.source().apikeys.length
var tryExit = function() {
	accountsTotal = accountsTotal + 1
	if (accountsTotal == accountsDone) {
		writeDump()
	}
}

var writeDump = function() {
	var dumpString = JSON.stringify(dump, null, 2)
	fs.writeFile("./dump.js", dumpString, function(err) {
		if(err) {
			console.log(err)
		} else {
			console.log("-> Wrote file.")
		}
	});
}


var keys = settings.source().apikeys
for (var i=0;i<keys.length;i=i+1) {
	setupSession(keys[i])
}



console.log('\n')
