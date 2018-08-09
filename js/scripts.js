$(document).ready(function() {

  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#vote').show();
    $("#ballot").click(function() {
    var submit = $("input:radio[name=flavor]:checked").val();
    alert(submit);
  } else if (age === 17) {
    $('#soonvote').show();
  } else {
    $('#novote').show();
  }

  event.preventDefault()

  });
});
