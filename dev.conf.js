require('babel-core/register');

exports.config = {

	framework: 'jasmine2',

	allScriptsTimeout: 30000,

	// Do not start a Selenium Standalone sever - only run this using chrome.
	directConnect: true,
	//chromeDriver: '../../node_modules/protractor/selenium/chromedriver',

	baseUrl: 'http://www.testomato.com/',

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
		//require("babel/register")(); // register babel
		browser.driver.manage().window().setSize(1280, 1024);
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