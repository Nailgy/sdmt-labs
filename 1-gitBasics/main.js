"use strict";

const { runInteractiveMode } = require("./interactive.js");
const { runNoninteractiveMode } = require("./noninteractive");

if (process.argv.length === 2) {
  runInteractiveMode();
} else if (process.argv.length === 3) {
  runNoninteractiveMode();
} else console.log("Error. Wrong format");
