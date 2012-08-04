var http = require('http'), settings = require('./settings.js').settings, fs = require('fs')

var session = null
var dump = {Blueprints: {}}
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
			
			session = sessionResult.Session.SessionKey
			console.log('-> Created session for source account.')
			
			fetchDeployments()
		})
	})
	
	request.write(put_data)
	request.end()
}

var fetchDeployments = function() {
	var options = settings.source()
	options.path += 'deployment.svc/find/all?session=' + session
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
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			
			for (var x=0;x<result.Deployments.length;x=x+1) {
				console.log('---> Fetching blueprint for deployment: ' + result.Deployments[x].Name)
				fetchBlueprint(result.Deployments[x].BlueprintId)
			}
		})
	})
	request.end()
}

var fetchBlueprint = function(bId) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			
			dump.Blueprints[result.Blueprint.Name] = result.Blueprint
			
			// initialize the counts
			counters[result.Blueprint.Name] = {
				schemaTotal: 0,
				schemaDone: 0,
				relationTotal: 0,
				relationDone: 0,
				listTotal: 0,
				listDone: 0
			}
			
			// fetch the schemas 
			console.log('------> Fetching schemas for blueprint: ' + result.Blueprint.Name)
			fetchSchemas(result.Blueprint.Id, result.Blueprint.Name)
			
			// fetch the relations
			console.log('------> Fetching relations for blueprint: ' + result.Blueprint.Name)
			fetchRelations(result.Blueprint.Id, result.Blueprint.Name)
			
			// fetch the lists
			console.log('------> Fetching lists for blueprint: ' + result.Blueprint.Name)
			fetchLists(result.Blueprint.Id, result.Blueprint.Name)
		})
	})
	request.end()
}

var fetchSchemas = function(bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/schemas?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			
			var schemas = ''
			counters[bName].schemaTotal = result.Schemas.length
			sTotal = result.Schemas.length
			for (var x=0;x<result.Schemas.length;x=x+1) {
				schemas += result.Schemas[x].Name + ','
				
				if (!dump.Blueprints[bName].Schemas) dump.Blueprints[bName].Schemas = {}
				dump.Blueprints[bName].Schemas[result.Schemas[x].Name] = result.Schemas[x]
				
				fetchSchemaProperties(bId, bName, result.Schemas[x].Name)
			}
		})
	})
	request.end()
}

var fetchSchemaProperties = function(bId, bName, sName) {
	var options = settings.source()
	options.path += 'schema.svc/' + bId + '/' + sName + '/properties?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			dump.Blueprints[bName].Schemas[sName].Properties = result.Properties
			counters[bName].schemaDone = counters[bName].schemaDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var fetchRelations = function(bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/relations?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			
			var relations = ''
			counters[bName].relationTotal = result.Relations.length
			for (var x=0;x<result.Relations.length;x=x+1) {
				relations += result.Relations[x].Name + ','
				
				if (!dump.Blueprints[bName].Relations) dump.Blueprints[bName].Relations = {}
				dump.Blueprints[bName].Relations[result.Relations[x].Name] = result.Relations[x]
				
				fetchRelationProperties(bId, bName, result.Relations[x].Name)
			}
		})
	})
	request.end()
}

var fetchRelationProperties = function(bId, bName, rName) {
	var options = settings.source()
	options.path += 'relation.svc/' + bId + '/' + rName + '/properties?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			dump.Blueprints[bName].Relations[rName].Properties = result.Properties
			counters[bName].relationDone = counters[bName].relationDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var fetchLists = function(bId, bName) {
	var options = settings.source()
	options.path += 'blueprint.svc/' + bId + '/contents/lists?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			
			var lists = ''
			counters[bName].listTotal = result.Lists.length
			for (var x=0;x<result.Lists.length;x=x+1) {
				lists += result.Lists[x].Name + ','
				
				if (!dump.Blueprints[bName].Lists) dump.Blueprints[bName].Lists = {}
				dump.Blueprints[bName].Lists[result.Lists[x].Name] = result.Lists[x]
				
				fetchListItems(bId, bName, result.Lists[x].Name)
			}
		})
	})
	request.end()
}

var fetchListItems = function(bId, bName, lName) {
	var options = settings.source()
	options.path += 'list.svc/' + bId + '/' + lName + '/contents?session=' + session
	options.method = 'GET'
	
	var request = http.request(options, function(res) {
		var result = '';
		res.setEncoding('utf8')
		res.on('data', function(chunk) {
			result += chunk 
		})
		res.on('end', function() {
			if (arguments.length > 0) result += arguments[0]
			result = JSON.parse(result)
			dump.Blueprints[bName].Lists[lName].Items = result.ListItems
			counters[bName].listDone = counters[bName].listDone + 1
			checkAllDone()
		})
	})
	request.end()
}

var checkAllDone = function() {
	var completedCount = 0, totalCount = 0
	for (var bId in counters) {
		totalCount = totalCount + 1
		if (counters[bId].schemaTotal == counters[bId].schemaDone && counters[bId].relationTotal == counters[bId].relationDone && counters[bId].listTotal == counters[bId].listDone) {
			completedCount = completedCount + 1
		}
	}
	if (totalCount == completedCount) {
		exports.push(dump)
		dump = {Blueprints: {}}
		tryExit()
		console.log(JSON.stringify(counters, null, 2))
	}
}

var accountsDone = 0
var accountsTotal = settings.source().apikeys.length
var tryExit = function() {
	accountsTotal = accountsTotal + 1
	if (accountsTotal == accountsDone) {
		writeFile()
	}
}

var writeDump = function() {
	var dumpString = JSON.stringify(exports, null, 2)
	fs.writeFile("./export.txt", 'var export = ' + dumpString, function(err) {
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
// setupSession(settings.source().apikey)

