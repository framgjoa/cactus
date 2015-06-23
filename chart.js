$('#symbolForm').keydown(function() {
  var key = e.which;
  if (key == 13) {
  // As ASCII code for ENTER key is "13"
  $('#symbolForm').submit(); // Submit form code
}

});

    var sym = $.url().param('symbol') || 'SLB';
    var dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);

    var symbolLookUp= function(symbol){
      console.log(symbol);
      var sym = $.url().param('symbol') || 'SLB';
      var dur = $.url().param('duration') || 3650;

      new Markit.InteractiveChartApi(sym, dur);

  };


