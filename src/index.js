import * as d3 from 'd3';

// Select DOM elements
var body = d3.select('body');
var nav = d3.select('nav');
var regionsList = d3.select('.regions');
var svg = d3.select('svg');

// add styles
body.style('background-color', '#F5F7DC').style('color', '#0F0326');

nav.style('background-color', '#FFFF82');

regionsList
  .style('list-style-type', 'none')
  .style('display', 'flex')
  .style('justify-content', 'space-around');

// This will change every time we click on a region
var currentRegion;

// When the DOM has loaded
document.addEventListener('DOMContentLoaded', event => {
  // Call our method that we need called getRegions
  getRegions();
});

function getRegions() {
  // List of regions we'll add to our ul, regionsList
  let regions = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];

  // For each region
  regions.forEach(region => {
    // grab the regions list
    regionsList
      // Create and append an li tag
      .append('li')
      // With the name of the region
      .text(region)
      // Add some cool styles
      .style('cursor', 'pointer')
      .style('padding', '0.5rem 0.3rem')
      .style('margin', '0.5rem 0.3rem')
      .style('border', '0.2rem solid black')
      .style('border-radius', '1rem')
      .style('border-color', '#0F0326')
      // Have an event listener
      .on('click', () => {
        // where we change the current region
        currentRegion = region;
        // Then use a method we'll write called fetchPopulation
        fetchPopulation(currentRegion);
      });
  });
}

function fetchPopulation(region) {
  // GET request to our restcountries region endpoint, and use our current region
  fetch(`https://restcountries.eu/rest/v2/region/${region}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })
    // parse response into JSON
    .then(res => res.json())
    // call our getCountiesOnDom method
    .then(getCountriesOnDom);
}

function getCountriesOnDom(data) {
  // Clear svg if it has any items inside
  d3.selectAll('svg > *').remove();
  svg
    .selectAll('rect') // <~ Create x number of rectangles
    .data(data) // <~ Based on the number of items inn our array of data
    .enter() // <~ enter the svg
    .append('rect') // <~ append the rectangle
    .attr('x', (d, i) => i * 21) // <~ starting postion (x axis)
    .attr('y', 200) // <~ starting position (y axis)
    .attr('width', 20) // <~ width for each rectangle
    .attr('height', d => d.population / 100000 + 1) // <~ Height of rectangle based on the population
    .style('fill', '#E65F5C'); // <~ Change bar's color
}

