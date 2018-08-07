// test01.js
/// <reference path="./steps.d.ts" />
"use strict";


Feature("TEST");

Scenario.only("browse tiqcse site w/ POs", async (I, navUtil, homePage, experimentPage, syllabusPage, teamPage, venuePage, linksPage, contactPage ) => {
	
	console.log("### START");

	// navigate to entry page (Home)
	await navUtil.goHome();

	// validate Home page
	await homePage.validate();

	// click Experiment
	await navUtil.clickExperiment();

	// validate Exp
	await experimentPage.validate();

	// click Syllabus
	await navUtil.clickSyllabus();

	// validate Syllabus page
	await syllabusPage.validate();


	console.log("### END");

});

