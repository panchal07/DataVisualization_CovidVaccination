(function(){
//Width and height of map
var margin = { top: 0, left: 0, right: 0, bottom: 0},
    height = 400-margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;    

var svg = d3.select("#map")
            .append("svg")
            .attr("height",height)
            .attr("width",width)
            .append("g")
            .attr("transform","translate(" +margin.left + "," +margin.top + ")");

//Read Data
d3.queue()
  .defer(d3.json, "us-states.json")
  .await(ready) 

//D3 Projection
var projection = d3.geo.albersUsa()
				   .translate([width/2, height/2])    // translate to center of screen
				   .scale([1000]);          // scale things down so see entire US
        
// Define path generator
var path = d3.geoPath()               // path generator that will convert GeoJSON to SVG paths
		  	 .projection(projection);  // tell path generator to use albersUsa projection

function ready( error, data){
    console.log(data)
    
}
})