// test00.js

/// for IDE:
/// <reference path="./steps.d.ts" />


// TESTS
Feature('CodeceptJS sessions testing 00');

Scenario('one session - google', async (I) => {

	I.amOnPage( "http://www.google.com/" );
	I.seeElement( "input#lst-ib" );
	I.fillField( "input#lst-ib", "green eggs" );
	I.wait(1);
	I.click( "input.lsb" );
	I.seeElement( "div.rc" );
	let nrGSearchResults = await I.grabNumberOfVisibleElements( "div.rc" );

	console.log("Google: " + nrGSearchResults + " search results on the page");

});
