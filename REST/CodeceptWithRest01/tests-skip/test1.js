// test1.js

// service metadata:
// https://catalog.data.gov/harvest/object/8f1b0312-5a20-4c19-a2b1-dc038c6bb8e6


const neatjson = require("neatjson");




Feature("REST Service Experimentation");

Scenario("Test simple method", async I => {

  I.say("HELLO");
  console.log("HELLO!!!!");

  //"http://factfinder.census.gov/service/data/v1";

  let url = "https://factfinder.census.gov" +
            "/service/geoSearch/v1/en/searchByDrillDown?searchYear=2014";
  let key = "&key=3d3aaa1cb9529eeb72d8d3ed4a8d8358ab1a5f7a";

  let resp = await I.sendGetRequest(url+key);
  let body = resp.raw_body;

  pause();

  let nrOptions = body.nextSelection.options.length;

  //console.log( "Response:" );
  //console.dir( body, {} );

  console.log( "Nr options=", nrOptions );


});
