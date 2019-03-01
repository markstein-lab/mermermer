// Copyright (C) 2019 Jakob L. Kreuze, All Rights Reserved.
//
// This file is part of Mermermer.
//
// Mermermer is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later
// version.
//
// Mermermer is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
// A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with
// Mermermer. If not, see <http://www.gnu.org/licenses/>.

const d3 = require('d3');
const sampleData = require('./sample-data.js').sampleData;

/**
 * Appends to the selection an `svg` element suitable for displaying some
 * sequence, drawing from the selection's data for the number of genes in the
 * sequnce and returning a selection for the new element. The resulting
 * element's height will be a multiple of {@param geneWidth} appropriate for the
 * number of genes in the sequence.
 *
 * @param {number=} geneWidth - The width, in pixels, of a gene.
 * @param {number=} geneWidth - The height, in pixels, of a gene.
 */
d3.selection.prototype.sequenceFrame = function(geneWidth = 800, geneHeight = 200) {
  let geneCount = this.data()
      .map((seq) => {
        let genes = seq.genes;
        let transcripts = genes.flatMap((gene) => { return gene.transcripts; });
        return genes.length + transcripts.length;
      })
      .reduce((acc, cur) => { return acc + cur });

  return this.append('svg')
    .attr('class', 'sequence-frame')
    .attr('viewBox', `0 0 ${geneWidth} ${geneHeight * geneCount}`)
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('geneWidth', geneWidth)
    .attr('geneHeight', geneHeight);
}

/**
 * Appends to the selection a `text` element containing some title, centered
 * vertically. Returns the selection that this was called on, as opposed to one
 * containing the new element.
 *
 * @param {!number} y - The Y coordinate, in pixels, of the top of the title's
 * bounding box.
 * @param {!string} title - The text contents of the title.
 */
d3.selection.prototype.featureTitle = function(y, title) {
  let text = this
      .append("g")
      .attr("class", "feature-title")
      .append("text")
      .text(title);

  let textWidth = text.node().getBBox().width;
  let textHeight = text.node().getBBox().height;

  let viewWidth = this.node().viewBox.baseVal.width;
  let viewHeight = this.node().viewBox.baseVal.height;

  text.attr("x", (viewWidth - textWidth) / 2);
  text.attr("y", textHeight);

  return this;
}

/**
 * Appends to the selection an invisible rectangular box with a line running
 * vertically through its center. Returns the selection that this was called on,
 * as opposed to one containing the new element.
 *
 * @param {!number} x - The X coordinate, in pixels, of the box's top left
 * corner.
 * @param {!number} y - The Y coordinate, in pixels, of the box's top left
 * corner.
 * @param {!number} w - The width, in pixels, of the box.
 * @param {!number} h - The height, in pixels, of the box.
 * @param {!string} fill - The color of the line.
 */
d3.selection.prototype.paddedLine = function(x, y, w, h, fill) {
  let r = h / 2;
  let g = this
      .append("g")
      .attr("class", "padded-line")
      .attr("fill", fill);

  g.append("rect")
    .attr("x", x)
    .attr("y", y + r - 1)
    .attr("width", w)
    .attr("height", 1);

  return this;
}

/**
 * Appends to the selection a rectangular shape with rounded caps at the ends.
 * Returns the selection that this was called on, as opposed to one containing
 * the new element.
 *
 * @param {!number} x - The X coordinate, in pixels, of the segment's top left
 * corner.
 * @param {!number} y - The Y coordinate, in pixels, of the segment's top left
 * corner.
 * @param {!number} w - The width, in pixels, of the segment.
 * @param {!number} h - The height, in pixels, of the segment.
 * @param {!string} fill - The color of the segment.
 */
d3.selection.prototype.segment = function(x, y, w, h, fill) {
  let r = h / 2;
  let g = this
      .selectAll(".segment")
      .attr("class", "segment")
      .attr("fill", fill);

  g.append("circle")
    .attr("cx", x + r)
    .attr("cy", y + r)
    .attr("r", r);

  g.append("circle")
    .attr("cx", x + w)
    .attr("cy", y + r)
    .attr("r", r);

  g.append("rect")
    .attr("x", x + r)
    .attr("y", y)
    .attr("width", w - r)
    .attr("height", h);

  return this;
}

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
