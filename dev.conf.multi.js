require('babel-core/register');

var path = require('path');

exports.config = {
	// baseUrl can be send by parameter
	baseUrl: 'https://www.zdrojak.cz/',

	allScriptsTimeout: 40000,
	chromeOnly: false, // don't use Chrome only... !!!
	getPageTimeout: 20000,
	maxSessions: -1,

	// Setup selenium server jar path or leave empty if you have Selenium Grid
	seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',

	// If you have selenium grid http://www.seleniumhq.org/docs/07_selenium_grid.jsp
	// The port to start the Selenium Server on, or null if the server should
	// find its own unused port.
	// seleniumAddress: 'http://...',

	// Additional command line options to pass to selenium. For example,
	// if you need to change the browser timeout, use
	// seleniumArgs: ['-browserTimeout=60'],
	seleniumArgs: [],

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [
		{
			'browserName': 'chrome',
			'version': 'Last',
			'maxInstances': 1,
			'platform': 'LINUX'
		}, {
			'browserName': 'firefox',
			'version': 'Last',
			'platform': 'LINUX',
			'maxInstances': 1
		}
	],

	onPrepare: function () {
		// Change browser size after launch
		browser.driver.manage().window().setSize(1280, 1024);

		// https://github.com/angular/protractor/blob/9891d430aff477c5feb80ae01b48356866820132/lib/protractor.js#L158
		browser.ignoreSynchronization = true; // Angular we don't have it...
	},

	framework: "jasmine2",

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
		includeStackTrace: true
	}
};