let browser = 'chrome';

if (process.profile === 'IE') {
	browser = 'internet explorer';
}

exports.config = {
	'output': './codeceptjs/output',
	'helpers': {
		'WebDriverIO': {
			'smartWait': 1000,
			'browser': browser,
			'restart': false,
			'url': 'http://localhost:4200',
			'cssSelectorsEnabled': true,
			'timeouts': {
				'script': 60000,
				'page load': 60000
			},
			'capabilities': [
				{
					'browserName': 'internet explorer',
					'ignoreProtectedModeSettings': true,
					'ignoreZoomSetting': true,
					'initialBrowserUrl': 'http://localhost:4200'
				}
			]
		},
		'JSFailure': {
			'require': './codeceptjs/helpers/js-failure.js'
		},
		'Mochawesome': {
		}
	},
	'include': {
		'I': './codeceptjs/common-steps/steps.js'
	},
	'mocha': {
		'reporterOptions': {
			'codeceptjs-cli-reporter': {
				'stdout': '-',
				'options': {
					'verbose': false,
					'steps': true
				}
			},
			'mochawesome': {
				'stdout': '-',
				'options': {
					'reportDir': './codeceptjs/output',
					'reportPageTitle': 'Report page',
					'reportFilename': 'report',
					'quiet': true,
					'json': true,
					'html': true,
					'overwrite': true,
					'inline': true
				}
			}
		}
	},
	'bootstrap': false,
	'teardown': null,
	'hooks': [],
	'tests': './codeceptjs/tests/**/*-test.js',
	'timeout': 10000,
	'name': 'cls-ucp-web',
	'multiple': {
		'parallel': {
			'chunks': 2,
			'browsers': ['chrome']
		}
	}
};

