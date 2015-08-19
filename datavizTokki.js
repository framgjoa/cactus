//var data = require('/scorching-fire-8470-export.json');

// Data will be in format JSON: sample
    // sample.endTime, sample.startTime, sample.interval (ms), sample.userCount
    // Each vote in form sample.sampleVoteID = {guestId:randomID, timeStep:8, voteVal:0}
//console.log("data", data, "data.end", data.endTime, "Axis", axisScale);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
  width = 1000-margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

var svgContainer = d3.select(".chart").append("svg")
                                      .attr("width", width + margin.right + margin.left)
                                      .attr("height", height + margin.top + margin.bottom)
                                    .append("g")
                                      .attr("transform", "translate(" + margin.left + "," + margin.top +")");



//Scaling function
var xAxisLength = data.endTime - data.startTime;

// Eventually format data for date:time
var xAxisScale = d3.scale.linear().domain([0, (xAxisLength)/10000]).range([0, 1000]);

var xAxis = d3.svg.axis().scale(xAxisScale).orient("bottom");
var xMap = function(d){return data.votes[d]["timeStep"]*data.interval;};

var yAxisScale = d3.scale.linear().domain([-2,2]).range([0, 400]);
var yAxis = d3.svg.axis().scale(yAxisScale).orient("left");
var yMap = function(d){return data.votes[d]["voteVal"];};



// Current x-axis position as calculated from timeStep

// var cumulativePosition = data.timeStep*data.interval
// var currentX = cumulativePosition - data.startTime

// x-Axis
svgContainer.append("g")
            .attr("class", "axis")
           // This line breaks the appending of the axis scale itself
           // .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
          .append("text")
            .attr("class", "label")
            .attr("x", 6)
            .attr("dx", ".71em")
            .style("text-anchor", "end")
            .text("Vote Counts");

// y-Axis
svgContainer.append("g")
            .attr("class", "axis")
            .call(yAxis)
          .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Vote Score");

// Vote dots
svgContainer.selectAll(".dot")
            .data(data)
          .enter().append("svg:circle")
            .attr("class", "dot")
            .attr("r", 3)
            .attr("cx", xMap)
            .attr("cy", yMap)
            .style("fill", "blue");






