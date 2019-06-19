// Business Logic //


function diceRoll() {
  var rollResult = 0
  rollResult = Math.random() * 6;
  var wholeRoll = Math.floor(rollResult) + 1;
  $(".outputRandom").text(wholeRoll);
  return wholeRoll
}







// User Interface Logic //
$(document).ready(function() {
  var p1Score = 0
  var p2Score = 0
  var diceValue = 0
  $("#diceImg").click(function() {
    var rollValue = diceRoll();
    diceValue = rollValue;
    return diceValue;
  });
  $("#button1").click(function() {
  p1Score = p1Score + diceValue;
  $(".outputP1").text(p1Score);
  return p1Score;
  });
  $("#button2").click(function() {
  p2Score = p2Score + diceValue;
  $(".outputP2").text(p2Score);
  return p2Score;
  });
});
