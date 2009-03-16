$(document).ready(function(){
  $('div.plx').mouseover(function(){
      $('#popup').show("slow");
  })
  .mouseout(function(){
    $('#popup').hide("slow");
  });
});