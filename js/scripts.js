$(document).ready(function(){
  $("div").click(function(){
    $(this).hide();
  });
});

$("#show").click(function(){
  $("div").show();
 });

$('#tentacleSubmit').on('click', function() {
  var tentacles=$('tentacles').val();
  console.log('it read  this from the input', tentacles)
});


var name = 'Chris'; // String

// var age = 38; // int
// instead of hardcoding age in javascript, we can read it from an input


console.log(tentacles)
