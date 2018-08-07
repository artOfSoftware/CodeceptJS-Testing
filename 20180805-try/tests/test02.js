// test01.js
/// <reference path="./steps.d.ts" />
"use strict";

function clickMenu(I, linkText) {
	I.click( linkText, "footer" );
}


Feature("TEST");

Scenario("browse tiqcse site", async I => {
	
	console.log("### START");


	await I.amOnPage("http://tiqcse.nyc");

	await I.seeInCurrentUrl("tiqcse.nyc");
	await I.see("Engineering","header");

	await I.wait(10);
	
	// wait for page to finish loading
	await I.waitForElement("#comp-jkg3tw4siframe", 60);
	
	// click Experiment
	//I.click( { xpath: "//a[contains(@href,'/venue')]" } ); 
	//I.click( "a[href$='/experiment']" );

	//await I.click( "Experiment", "footer" );
	await clickMenu(I,"Experiment");

	// wait for page to finish loading
	await I.waitForElement("#SITE_FOOTERinlineContent", 60);

	await I.seeInCurrentUrl("/experiment");
	await I.see("The Vision","h1");

	// click Syllabus
	//await I.click( "a[href$='/syllabus']", "footer" );
	await clickMenu(I,"Syllabus");

	await I.seeInCurrentUrl("/syllabus");
	await I.see("Syllabus","h1");
	

	console.log("### END");

});

