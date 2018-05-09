// twoSessionsChat_test.js
'use strict';
/// <reference path="./steps.d.ts" />



// TESTS
Feature('CodeceptJS sessions testing 03');

Scenario('two session - stateful app and POs', async (I, statefulChatPage) => {

	let name = "onTy";
	let text = "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello!";

	// first session:
	await statefulChatPage.go();
	await statefulChatPage.validate();

	await statefulChatPage.post(name,text);

	let conversationItemCount = await statefulChatPage.getNrOfConversationItems();
	let conversation = await statefulChatPage.getConversation();
	console.log( "We found " + conversationItemCount + " items" );
	console.log( "Conversation: " );
	console.dir( conversation );
	console.log( "Len=" + conversation.length );

	//I.seeTextEquals( name, locConversationItemField2 );
	//I.seeTextEquals( text, locConversationItemField3 );

	// second session
	//let secondSessionOpts = {
	//	"browser": "firefox",
	//	"windowSize": "600x600"
	//};
	//await session('secondSession', secondSessionOpts,
	//	async () => {
	//
	//	I.amOnPage( url );
	//	I.wait(10);

	//	I.seeElement( locMInputField );
	//	I.fillField( locMInputField, queryM );
	//	I.click( locMSearchButton );
	//	I.switchToNextTab();
	//	I.wait(1);
	//	//pause();
	//	I.seeElement( locMSearchItem );
	//	nrMSearchResults = await I.grabNumberOfVisibleElements( locMSearchItem );
	//});

	//I.wait(10);

	//console.log("Google: " + nrGSearchResults + " search results on the page");
	//console.log("MSN   : " + nrMSearchResults + " search results on the page");

});
