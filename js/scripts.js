$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
  } else if (age === 17) {
    $('#soonvote').show();
  } else {
    $('#novote').show();
  }
});
