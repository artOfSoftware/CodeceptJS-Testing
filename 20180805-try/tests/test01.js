// test01.js

/// <reference path="./steps.d.ts" />


Feature("TEST");

Scenario("test01a", async I => {
	
	console.log("### START");

	I.amOnPage("http://tiqcse.nyc");

	I.seeInCurrentUrl("tiqcse.nyc")

	I.see("Engineering");
	
	console.log("### END");

});

