const d3 = require('d3');
const sampleData = require('./sample-data.js').sampleData;

// Set the page header.
d3.select("body")
  .append("h1")
  .text(`Results for "${sampleData.query}"`);

// Initialize an individual SVG element for each individual sequence in the
// "Results" object.
d3.select("body")
  .selectAll("svg")
  .data(sampleData.sequences)
  .enter()
  .append("svg");
