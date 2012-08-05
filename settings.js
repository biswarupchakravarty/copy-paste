// these settings are fed to the application

var settings = {
	source: function() {
		return {
			host: 'gossamer.tavisca.com',
			path: '/v0.9/core/',
			apikeys: ['+MmuqVgHVYH7Q+5imsGc4497fiuBAbBeCGYRkiQSCfY=','KjqRW4fIa0uNIMJgHxm6KjQzKfcbleEhR3vQsJuf4Zk=']
		}
	},
	destination: function() {
		return {
			host: 'stage-gossamer.tavisca.com',
			path: '/v0.9/core/',
			apikey: null,
			names: ['RestaurantSearch','Genesis'],
			createNewAccounts: false,
			headers: {
				"Content-Type": "application/json"
			}
		}
	}
}

exports.settings = settings
