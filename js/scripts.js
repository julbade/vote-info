$(document).ready(function() {

  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
    $("#submit").click(function() {
      var VoteNow = $("input:radio[name=flavor]:checked").val();
      $('#aftervote').show();
      $(".canidate").append(VoteNow);
    });
  } else if (age === 17) {
    $('#soonvote').show();
  } else {
    $('#novote').show();
  }

  event.preventDefault()

  });
