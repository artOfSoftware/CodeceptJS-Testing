// Home.js
/// <reference path="../steps.d.ts" />
'use strict';

let I;

module.exports = {

    _init() {
        I = require('../codecept-steps.js')();
    },

    // insert your locators and methods here
    async validate() {
	    await I.seeInCurrentUrl("/syllabus");
	    await I.see("Syllabus","h1");
    }
};
