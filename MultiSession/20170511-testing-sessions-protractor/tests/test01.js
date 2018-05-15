// twoSessions1_test.js

/// for IDE:
/// <reference path="./steps.d.ts" />

const url = "https://www.w3schools.com/html/html_iframe.asp";


// TESTS
Feature('CodeceptJS sessions testing 06');

Scenario('w3schools iframe', async (I) => {

	I.amOnPage( url );
	I.seeTextEquals("HTML Iframes", "h1");

	I.seeElement( "iframe" );
	within( { frame: "iframe" }, async () => {
		let text;
		I.seeTextEquals("HTML5 Tutorial", "h1");
	});

});


// This test outputs:
//
// Google: 7 search results on the page
// MSN   : undefined search results on the page

