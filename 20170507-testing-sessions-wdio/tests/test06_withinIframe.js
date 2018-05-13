// test06_withinIframe.js

/// for IDE:
/// <reference path="./steps.d.ts" />

const url = "https://www.w3schools.com/html/html_iframe.asp";


// TESTS
Feature('CodeceptJS sessions testing 06');

Scenario('w3schools iframe', async (I) => {

	I.amOnPage( "http://google.com/" );
	//I.amOnPage( url );
	//I.seeTextEquals("Iframes", "h1 span");
	//
	//I.seeElement( "iframe" );
	//await within( { frame: "iframe" }, () => {
	//	I.seeTextEquals("HTML5 Tutorial", "h1 span");
	//});

	await session( "second", null, async () => {
		I.amOnPage( url );
		I.seeTextEquals("Iframes", "h1 span");

		I.seeElement( "iframe" );
		await within( { frame: "iframe" }, async () => {
			I.seeTextEquals("Tutorial", "h1 span");
		});
	});

});

