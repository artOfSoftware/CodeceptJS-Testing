// twoSessions1_test.js

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

const locGSearchResultsItem   = "div.rc";
const locMSearchResultsItem   = "li.b_algo";


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
	I.seeElement( locGSearchResultsItem );
	nrGSearchResults = await I.grabNumberOfVisibleElements( locGSearchResultsItem );

	// second session: MSN
	nrMSearchResults = await session('secondSession', async () => {

		I.amOnPage( urlM );
		I.seeElement( locMInputField );
		I.fillField( locMInputField, queryM );
		I.click( locMSearchButton );
		I.switchToNextTab();
		I.wait(1);
		I.seeElement( locMSearchResultsItem );
		return await I.grabNumberOfVisibleElements( locMSearchResultsItem );
	});

	console.log("Google: " + nrGSearchResults + " search results on the page");
	console.log("MSN   : " + nrMSearchResults + " search results on the page");

});


// This test outputs:
//
// Google: 7 search results on the page
// MSN   : undefined search results on the page

