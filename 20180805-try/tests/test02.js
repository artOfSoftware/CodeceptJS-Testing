// test01.js

/// <reference path="./steps.d.ts" />


Feature("TEST");

Scenario.only("browse tiqcse site", async I => {
	
	console.log("### START");


	await I.amOnPage("http://tiqcse.nyc");

	await I.seeInCurrentUrl("tiqcse.nyc");
	await I.see("Engineering");

	await I.wait(10);
	
	// wait for page to finish loading
	await I.waitForElement("#comp-jkg3tw4siframe", 60);
	
	// click Experiment
	//I.click( { xpath: "//a[contains(@href,'/venue')]" } ); 
		//"a[text()='Venue']" );
		//[role=button]
	//I.click( "a[href$='/experiment']" );
	await I.click( "Experiment" );
	
	// wait for page to finish loading
	await I.waitForElement("#SITE_FOOTERinlineContent", 60);

	await I.seeInCurrentUrl("/experiment");
	await I.see("The Vision");

	// click Syllabus
	await I.click( "a[href$='/syllabus']" );

	await I.seeInCurrentUrl("/syllabus");
	await I.see("Syllabus");
	

	console.log("### END");

});

