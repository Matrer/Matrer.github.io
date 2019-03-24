
$(document).ready(function(){

  $("#list").click(function(){
      $('#listContenter').fadeToggle("fast");
  });
});

$(document).mouseup(function(e)
{
    var container = $('#list');
    var listContenter = $('#listContenter');
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        listContenter.hide();
    }
});
