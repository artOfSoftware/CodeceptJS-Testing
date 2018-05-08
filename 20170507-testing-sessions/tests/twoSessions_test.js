// twoSessions_test.js

/// for IDE:
/// <reference path="./steps.d.ts" />

const urlG = "http://www.google.com/";
const urlY = "http://www.yahoo.com/";
const urlM = "http://www.msn.com/";

const locGInputField    = "input#lst-ib";
const locGSearchButton  = "input[name=btnK]";
const locGSearchButton2 = "input.lsb";
const locGResultsStats  = "div#resultStats";

const locYInputField   = "input#uh-search-box";
const locYSearchButton = "input#uh-search-button";

const locMInputField   = "input#q";
const locMSearchButton = "button#sb_form_go";
const locMResultsStats = "span.sb_count";

const queryG 		   = "google voice";
const queryY 		   = "yahoo finance";
const queryM 		   = "microsoft surface";

const locGSearchItem   = "div.rc";
const locYSearchItem   = "div.compTitle";
const locMSearchItem   = "li.b_algo";


// TESTS
Feature('CodeceptJS sessions testing 01');

Scenario('two session - google & msn', async (I) => {

	let nrGSearchResults, nrMSearchResults,
		nrGSearchResultsTotal, nrMSearchResultsTotal,
		tmp;

	// first session: google
	I.amOnPage( urlG );
	I.seeElement( locGInputField );
	I.fillField( locGInputField, queryG );
	I.wait(1);
	I.click( locGSearchButton2 );
	I.seeElement( locGSearchItem );
	nrGSearchResults = await I.grabNumberOfVisibleElements( locGSearchItem );
	pause();

	tmp = await I.grabTextFrom(locGResultsStats);
	//tmp = tmp.match( /About ([\d,]?) results.*/ );
	console.log("tmp=", tmp);
	tmp = tmp.match( / [\d,]+ / );
	tmp = tmp[0];
	tmp = tmp.replace( /,/g, "" );
	tmp = parseInt(tmp);
	nrGSearchResultsTotal = tmp;

	console.log("Google: " + nrGSearchResults + " search results on the page");
	console.log("Google: " + nrGSearchResultsTotal + " total search results");

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
		nrMSearchResultsTotal = await I.grabTextFrom(locMResultsStats);

		console.log("MSN   : " + nrMSearchResults + " search results on the page");
		console.log("MSN   : " + nrMSearchResultsTotal + " total search results");

	});

});
