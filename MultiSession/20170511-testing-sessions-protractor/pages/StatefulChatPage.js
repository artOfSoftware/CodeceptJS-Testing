// StatefulChatPage.js
'use strict';
/// <reference path="../steps.d.ts" />

const moment = require("moment");


let I;

module.exports = {

    _init() {
		I = actor();
    },

    // insert your locators and methods here
	//urlBase: "http://toom47-001-site5.itempurl.com",
	urlBase: "http://www.statefulapp.ontytoom.com",
	url:     "/UI/ChatRoom",

    locNameField: "#MainContent_textUserName",
    locTextField: "#MainContent_textUserSays",
    locSayItButton: "#MainContent_buttonUserSaysClick",
    locConversation: "#MainContent_tableConvHist",
    locConversationItems: "#MainContent_tableConvHist tr",
    locConversationItemField1: "#MainContent_tableConvHist tr td:nth-of-type(1)",
    locConversationItemField2: "#MainContent_tableConvHist tr td:nth-of-type(2)",
    locConversationItemField3: "#MainContent_tableConvHist tr td:nth-of-type(3)",

	locRefreshButton: "#MainContent_buttonRefresh",
	locClearButton: "#MainContent_buttonClear",

	async go() {
		await I.amOnPage( this.urlBase + this.url );
	},

	async validate() {
    	await I.seeInCurrentUrl( this.url );
		await I.seeElement( this.locNameField );
	},

	async post( name, text ) {
		let ts = moment.now();

		await I.fillField( this.locNameField, name );
		await I.fillField( this.locTextField, text );
		await I.wait(1);
		await I.click( this.locSayItButton );
	},

	async clickRefresh() {
		await I.click( this.locRefreshButton );
	},

	async clickClear() {
		await I.click( this.locClearButton );
	},

	async getNrOfConversationItems() {
    	//return await I.executeScript()
		return await I.grabNumberOfVisibleElements(
			this.locConversationItems);
	},

	async getConversation() {
    	let field1array = await I.grabTextFrom(this.locConversationItemField1);
		let field2array = await I.grabTextFrom(this.locConversationItemField2);
		let field3array = await I.grabTextFrom(this.locConversationItemField3);
		let conv = [];
		for ( let i=0; i<field1array.length; i++ )
			conv.push( [ field1array[i], field2array[i], field3array[i] ] );

		return conv;
	},

	async getLastMessage() {
		let nr = await I.grabNumberOfVisibleElements(this.locConversationItems);

		let loc = await locate( this.locConversation )
			.find('tr')
			.at(nr)
			.find("td")
			.at(3);
		return await I.grabTextFrom(loc);
	}

};
