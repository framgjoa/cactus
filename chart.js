$('#symbolForm').keydown(function() {
  var key = e.which;
  if (key == 13) {
  // As ASCII code for ENTER key is "13"
  $('#symbolForm').submit(); // Submit form code
}




});


  $(function(){

    var sym = $.url().param('symbol') || 'SLB';
    var dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);
  });

//Handles drop-down menu
    function symbolLookUp(symbol){
      var symbol = symbol.value;
      console.log("Inside lookUp(): ", symbol);
      var sym = symbol || "SLB";
      var dur =  3650;

      new Markit.InteractiveChartApi(sym, dur);

   };

//Handles type-in ticker form
$('form').submit(function(event){
      event.preventDefault();
      var symbol = $("input").val()
      //var duration;

      //console.log("Inside lookUp: ", symbol );
      var sym = symbol || "SLB";
      var dur =  3650;

      new Markit.InteractiveChartApi(sym, dur);
  });


