var http = require('http'), settings = require('./settings.js').settings

var session = null
var dump = {Blueprints: {}}

var getServiceUrl = function(service) {
	return settings.source.url + settings.source.path + '/' + service
}

var sTotal = sDone = rTotal = rDone = cTotal = cDone = 0

var setupSession = function() {
	var options = settings.source()
	options.path += 'account.svc/session'
	options.method = 'PUT'
	var put_data = JSON.stringify({
		"ApiKey": options.apikey,
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
			sTotal = result.Schemas.length
			for (var x=0;x<result.Schemas.length;x=x+1) {
				schemas += result.Schemas[x].Name + ','
				
				if (!dump.Blueprints[bName].Schemas) dump.Blueprints[bName].Schemas = {}
				dump.Blueprints[bName].Schemas[result.Schemas[x].Name] = result.Schemas[x]
				
				fetchSchemaProperties(bId, bName, result.Schemas[x].Name)
			}
			console.log('------>Fetched ' + schemas.substr(0,schemas.length-1))
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
			sDone = sDone + 1
			
			if (rDone == rTotal && sDone == sTotal && cTotal == cDone) {
				console.log(JSON.stringify(dump, null, 2))
			}
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
			rTotal = result.Relations.length
			for (var x=0;x<result.Relations.length;x=x+1) {
				relations += result.Relations[x].Name + ','
				
				if (!dump.Blueprints[bName].Relations) dump.Blueprints[bName].Relations = {}
				dump.Blueprints[bName].Relations[result.Relations[x].Name] = result.Relations[x]
				
				fetchRelationProperties(bId, bName, result.Relations[x].Name)
			}
			console.log('------>Fetched ' + relations.substr(0,relations.length-1))
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
			rDone = rDone + 1
			
			if (rDone == rTotal && sDone == sTotal && cTotal == cDone) {
				console.log(JSON.stringify(dump, null, 2))
			}
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
			cTotal = result.Lists.length
			for (var x=0;x<result.Lists.length;x=x+1) {
				lists += result.Lists[x].Name + ','
				
				if (!dump.Blueprints[bName].Lists) dump.Blueprints[bName].Lists = {}
				dump.Blueprints[bName].Lists[result.Lists[x].Name] = result.Lists[x]
				
				fetchListItems(bId, bName, result.Lists[x].Name)
			}
			console.log('------>Fetched ' + lists.substr(0,lists.length-1))
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
			cDone = cDone + 1
			
			if (rDone == rTotal && sDone == sTotal && cTotal == cDone) {
				console.log(JSON.stringify(dump, null, 2))
			}
		})
	})
	request.end()
}

console.log('\n')
setupSession()

