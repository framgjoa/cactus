
// On page load
  $(function(){
    var sym = $.url().param('symbol') || 'SLB';
    var dur = $.url().param('duration') || 3650;
    new Markit.InteractiveChartApi(sym, dur);
  });

// Handles drop-down menu
    function symbolLookUp(option){
      var symbol = option.value;
      var sym = symbol || "SLB";
      var dur =  3650;
      new Markit.InteractiveChartApi(sym, dur);

   };

// Handles type-in ticker form
$('form').submit(function(event){
      event.preventDefault();
      var symbol = $("input").val()
      var sym = symbol || "SLB";
      var dur =  3650;

      new Markit.InteractiveChartApi(sym, dur);
  });


