const d3 = require('d3');
const sampleData = require('./sample-data.js').sampleData;

function component() {
  let element = document.createElement('div');
  element.innerHTML = "Hello, Webpack!";
  return element;
}

document.body.appendChild(component());

// d3.select("body")
//   .append("svg")
//   .append("circle")
//   .attr("cx", 60)
//   .attr("cy", 60)
//   .attr("r", 6);
