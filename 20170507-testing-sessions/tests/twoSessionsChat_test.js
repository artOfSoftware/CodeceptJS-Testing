// twoSessionsChat_test.js

/// for IDE:
/// <reference path="./steps.d.ts" />

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

Scenario('two session - chat simple stateful app', async (I) => {

	let name = "onTy";
	let text = "Hello!";

	// first session:
	I.amOnPage( url );
	I.seeElement( locNameField );
	I.fillField( locNameField, name );
	I.fillField( locTextField, text );
	I.wait(1);
	I.click( locSayItButton );

	pause();

	//// second session: yahoo
	//await session('secondSession', async () => {
	//
	//	I.amOnPage( urlM );
	//	I.seeElement( locMInputField );
	//	I.fillField( locMInputField, queryM );
	//	I.click( locMSearchButton );
	//	I.switchToNextTab();
	//	I.wait(1);
	//	//pause();
	//	I.seeElement( locMSearchItem );
	//	nrMSearchResults = await I.grabNumberOfVisibleElements( locMSearchItem );
	//});
	//
	//console.log("Google: " + nrGSearchResults + " search results on the page");
	//console.log("MSN   : " + nrMSearchResults + " search results on the page");

});
