// twoSessions_test.js

/// for IDE:
/// <reference path="./steps.d.ts" />

const urlG = "http://www.google.com/";
const urlM = "http://www.msn.com/";

const locGInputField    = "input#lst-ib";
const locGSearchButton  = "input[name=btnK]";
const locGSearchButton2 = "input.lsb";

const locMInputField   = "input#q";
const locMSearchButton = "button#sb_form_go";

const queryG 		   = "google voice";
const queryM 		   = "microsoft surface";

const locGSearchItem   = "div.rc";
const locMSearchItem   = "li.b_algo";


// TESTS
Feature('CodeceptJS sessions testing 01');

Scenario('two session - google & msn', async (I) => {

	let nrGSearchResults, nrMSearchResults;

	// first session: google
	I.amOnPage( urlG );
	I.seeElement( locGInputField );
	I.fillField( locGInputField, queryG );
	I.wait(1);
	I.click( locGSearchButton2 );
	I.seeElement( locGSearchItem );
	nrGSearchResults = await I.grabNumberOfVisibleElements( locGSearchItem );

	// second session: yahoo
	await session('secondSession', async () => {

		I.amOnPage( urlM );
		I.seeElement( locMInputField );
		I.fillField( locMInputField, queryM );
		I.click( locMSearchButton );
		I.switchToNextTab();
		I.wait(1);
		//pause();
		I.seeElement( locMSearchItem );
		nrMSearchResults = await I.grabNumberOfVisibleElements( locMSearchItem );
	});

	console.log("Google: " + nrGSearchResults + " search results on the page");
	console.log("MSN   : " + nrMSearchResults + " search results on the page");

});


// This test outputs:
//
// Google: 7 search results on the page
// MSN   : undefined search results on the page

