// Home.js
/// <reference path="../steps.d.ts" />
'use strict';

const conf = require("../onty-config");

let I;

function clickMenu(I, linkText) {
	I.click( linkText, "footer" );
}

module.exports = {

    _init() {
        I = require('../codecept-steps.js')();
    },

    // insert your locators and methods here
    async goHome() {
	    await I.amOnPage( conf.baseUrl );
	    await waitForPageToLoad();
    },

	async clickExperiment() {
		await clickMenu(I,"Experiment");
		await waitForPageToLoad();
	},

	async clickSyllabus() {
		await clickMenu(I,"Syllabus");
		await waitForPageToLoad();
	},

	async clickTeam() {
		await clickMenu(I,"Team");
		await waitForPageToLoad();
	},

	async clickVenue() {
		await clickMenu(I,"Venue");
		await waitForPageToLoad();
	},

	async clickLinks() {
		await clickMenu(I,"Links");
		await waitForPageToLoad();
	},

	async clickContact() {
		await clickMenu(I,"Contact");
		await waitForPageToLoad();
	},

	async waitForPageToLoad() {
		//await I.wait(10);

		//// wait for page to finish loading
		await I.waitForElement( "footer", conf.sleep );

		// wait for iframe with chat
		await I.waitForElement( "#comp-jkg3tw4siframe", conf.sleep );
	},


};
