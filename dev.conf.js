require('babel-core/register');

exports.config = {

	framework: 'jasmine2',

	allScriptsTimeout: 30000,

	// Do not start a Selenium Standalone sever - only run this using chrome.
	directConnect: true,
	//chromeDriver: '../../node_modules/protractor/selenium/chromedriver',

	baseUrl: 'https://www.zdrojak.cz/',

	// Capabilities to be passed to the webdriver instance.

	// To disable the "unsupported flag" prompt,
	// add --test-type to the command-line flags you're using.
	// This shouldn't affect the browser in any other noticeable way,
	// but it's used for internal testing, so use it at your own risk.

	capabilities: {
		'browserName': 'chrome',
		'chromeOptions': {
			'args': ['--test-type'] // https://github.com/theintern/intern/issues/210#issuecomment-46800826
		}
	},

	onPrepare: function () {
		// Change browser size after launch
		browser.driver.manage().window().setSize(1280, 1024);

		// https://github.com/angular/protractor/blob/9891d430aff477c5feb80ae01b48356866820132/lib/protractor.js#L158
		browser.ignoreSynchronization = true; // Angular we don't have it...
	},

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: [
		'**/*.spec.js'
	],

	exclude: [
		'**/*.unsafe.spec.js' // registrace, nelze poustet ve vice vlaknech
	],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		isVerbose: false,
		includeStackTrace: false
	}
};