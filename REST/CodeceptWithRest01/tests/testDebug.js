// testDebug.js



Feature("Misc");

Scenario("Test I.debug", async (I) => {
  console.log("STARTS HERE");
  I.debug(null, "abc");
  console.log("ENDS HERE");
});

Scenario("Test I.debugSection", async (I) => {
  console.log("STARTS HERE");
  I.debugSection(null, "abc");
  console.log("ENDS HERE");
});
