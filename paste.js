var http = require('http'), fs = require('fs'), settings = require('./settings').settings, stringify = require('querystring').stringify
var dump = {}

var putData = function(options, data, callback) {
	options = options || {}
	options.method = options.method || 'PUT'
	
	callback = callback || function() {}
	data = JSON.stringify(data || {})
	
	var request = http.request(options, function(res) {
			var result = '';
			res.setEncoding('utf8')
			res.on('data', function(chunk) {
				result += chunk
			})
			res.on('end', function() {
				result = JSON.parse(result)
			
				callback(result)
			})
		})
		request.write(data)
		request.end()
}

fs.readFile('dump.js', function(err,data){
	if(err) {
		console.error("Could not open file: %s", err);
		process.exit(1);
	}
	dump = JSON.parse(data)
	
	// start the process
	var options = settings.destination()
	var keys = settings.source().apikeys
	for (var x=0 ; x<options.names.length ; x=x+1) {
		if (options.createNewAccounts) createAccount(options.names[x], keys[x])
		else createSession(keys[x])
	}
	
});

var map = {}

var createAccount = function(accName, apikey) {
	var mainApiKey = ''
	
	var getApiKey = function() {
		var options = settings.destination()
		options.path += 'testharness.svc/key'
		options.method = 'GET'
		var request = http.request(options, function(res) {
			var result = '';
			res.setEncoding('utf8')
			res.on('data', function(chunk) {
				result += chunk
			})
			res.on('end', function() {
				if (arguments.length > 0) result += arguments[0]
				mainApiKey = result.replace(/\"/gi,'')
				console.log('Main apikey: ' + mainApiKey)
				step2()
			})
		})
		request.end()
	}
	
	var step2 = function() {
		var options = settings.destination()
		options.path += 'account.svc/?apikey=' + mainApiKey
		options.method = 'PUT'
		
		var request = http.request(options, function(res) {
			var result = '';
			res.setEncoding('utf8')
			res.on('data', function(chunk) {
				result += chunk
			})
			res.on('end', function() {
				if (arguments.length > 0) result += arguments[0]
				result = JSON.parse(result)
			
				console.log(JSON.stringify(result, null, 2))
			})
		})
		request.write(JSON.stringify({
			"ApiKeys": [
				{
					"Description": "APIKey created while sync'ing.",
					"IsDisabled": false,
					"Key": apikey
				}
			],
			"Attributes": [],
			"CreatedBy": "Test User",
			"Description": accName,
			"LastUpdatedBy": null,
			"Name": accName,
			"Users": [
				"Test User_" + parseInt(Math.random() * 100)
			]
		}))
		request.end()
	}
	getApiKey()
}

// create the sessions from the provided apikeys
var createSession = function(apikey) {
	var sessionRequest = {
		"ApiKey": apikey,
		"IsNonSliding": false,
		"UsageCount": -1,
		"WindowTime": 60
	}
	
	var options = settings.destination()
	options.path += 'Account.svc/session'
	
	putData(options, sessionRequest, function(result) {
		startTransfer(result.Session.SessionKey)
	})
}

var startTransfer = function(session) {
	var map = {
		lists: {},
		schemas: {},
		relations: {}
	}
}
