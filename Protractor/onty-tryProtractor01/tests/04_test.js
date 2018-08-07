// test01.js
/// <reference path="./steps.d.ts" />
"use strict";

const conf = require("../onty-config");


Feature("TEST PROTRACTOR");

Scenario("browse siteA", async I => {
	
	console.log("### START");


	await I.amOnPage( conf.baseUrl );

	await I.seeInCurrentUrl( conf.baseUrl );
	await I.seeElement( "body" );


	// make sure cant see gallery yet
	//await I.dontSeeElement( "div#gallery" );


	// try clicking Gallery button

	await I.click( "a[ng-click*='Gallery']" );


	//I.seeElement( "a[ng-click=\"toggle_gallery_type_filter('dark')\"]" );
	await I.seeElement( "div#gallery" );


	console.log("### END");

});

