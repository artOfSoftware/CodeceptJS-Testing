// test01.js

/// <reference path="./steps.d.ts" />


Feature("TEST");

Scenario.only("browse tiqcse site", async I => {
	
	console.log("### START");

	
	I.amOnPage("http://tiqcse.nyc");
	
	I.seeInCurrentUrl("tiqcse.nyc")
	I.see("Engineering");

	I.wait(10);
	
	// wait for page to finish loading
	I.waitForVisible("#comp-jkg3tw4siframe", 60);
	
	// click Experiment
	//I.click( { xpath: "//a[contains(@href,'/venue')]" } ); 
		//"a[text()='Venue']" );
		//[role=button]
	//I.click( "a[href$='/experiment']" );
	I.click("experiment");
	
	// wait for page to finish loading
	I.waitForVisible("#SITE_FOOTERinlineContent", 60);

	I.seeInCurrentUrl("/experiment");
	I.see("The Vision");

	// click Syllabus
	I.click( "a[href$='/syllabus']" );

	I.seeInCurrentUrl("/syllabus")
	I.see("Syllabus");
	

	console.log("### END");

});

