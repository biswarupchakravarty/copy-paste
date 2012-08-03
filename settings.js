// these settings are fed to the application

var settings = {
	source: function() {
		return {
			host: 'gossamer.tavisca.com',
			path: '/v0.9/core/',
			apikey: '+MmuqVgHVYH7Q+5imsGc4497fiuBAbBeCGYRkiQSCfY='
		}
	},
	destination: function() {
		return {
			host: 'stage-gossamer.tavisca.com',
			path: 'v0.9/core/',
			apikey: null
		}
	}
}

exports.settings = settings
