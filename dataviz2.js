var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height / 2) + ")");

function update(data) {

  // DATA JOIN
  // Join new data with old elements, if any.
  var text = svg.selectAll("text")
      .data(data, function(d) { return d; });

  // UPDATE
  // Update old elements as needed.
  text.attr("class", "update")
    .transition()
      .duration(700)
      .attr("x", function(d,i){return i*32;});

  // ENTER
  // Create new elements as needed.
  text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .text(function(d) { return d; })
      .style("fill-opacity", 1e-6)
    .transition()
      .duration(700)
      .attr("y", 0)
      .style("fill-opacity", 1);


  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.
  text.attr("x", function(d, i) { return i * 32; })

  // EXIT
  // Remove old elements as needed.
  text.exit()
    .attr('class', 'exit')
   .transition()
    .duration(700)
    .attr('y', 60)
    .style('fill-opacity', 1e-6)
    .remove();
}

// The initial display.
update(alphabet);

// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function() {
  update(d3.shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
}, 1500);
