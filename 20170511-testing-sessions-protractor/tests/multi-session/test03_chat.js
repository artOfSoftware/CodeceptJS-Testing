// twoSessionsChat_test.js

/// <reference path="./steps.d.ts" />

const moment = require("moment");

// locators etc
const url = "http://toom47-001-site5.itempurl.com/UI/ChatRoom";

const locNameField = "#MainContent_textUserName";
const locTextField = "#MainContent_textUserSays";
const locSayItButton = "#MainContent_buttonUserSaysClick";
const locConversation = "#MainContent_tableConvHist";
const locConversationItems = "#MainContent_tableConvHist tr";
const locConversationItemField1 = "#MainContent_tableConvHist tr td:nth-of-type(1)";
const locConversationItemField2 = "#MainContent_tableConvHist tr td:nth-of-type(2)";
const locConversationItemField3 = "#MainContent_tableConvHist tr td:nth-of-type(3)";


// TESTS
Feature('CodeceptJS sessions testing 02');

Scenario('two session - stateful app', async (I) => {

	let name = "onTy "   + ts;
	let text = "Hello! " + ts;

	// first session:
	I.amOnPage( url );
	I.seeElement( locNameField );
	I.fillField( locNameField, name );
	I.fillField( locTextField, text );
	I.wait(1);
	I.click( locSayItButton );

	//I.seeTextEquals( name, locConversationItemField2 );
	//I.seeTextEquals( text, locConversationItemField3 );

	// second session
	let secondSessionOpts = {
		"browser": "firefox",
		"windowSize": "600x600"
	};
	await session('secondSession', secondSessionOpts,
		async () => {

		I.amOnPage( url );
		I.wait(10);

		I.seeElement( locMInputField );
		I.fillField( locMInputField, queryM );
		I.click( locMSearchButton );
		I.switchToNextTab();
		I.wait(1);
		I.seeElement( locMSearchResultsItem );
		//nrMSearchResults = await I.grabNumberOfVisibleElements( locMSearchResultsItem );
	});

	//I.wait(10);

	//console.log("Google: " + nrGSearchResults + " search results on the page");
	//console.log("MSN   : " + nrMSearchResults + " search results on the page");

});
