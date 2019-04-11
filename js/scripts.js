function myFunction() {
  alert("💢 Aha! No projects to display yet, sadly :( 💢");
};

$(document).ready(function() {
  $("button").click(function() {
    $(".dots").toggleClass("alt_background");
  });
});
