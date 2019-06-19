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
  var p1TurnTotal = 0
  var p2TurnTotal = 0
  var diceValue = 0
  var p1ScoreTotal = 0
  var p2ScoreTotal = 0
  var reset = 0
  var reset2 = 0
  $(".outputP1").text(p1TurnTotal);
  $(".outputP2").text(p2TurnTotal);
  $(".outputScore").text(p1ScoreTotal);
  $(".outputScore2").text(p2ScoreTotal);

  $("#diceImg").click(function() {
    var rollValue = diceRoll();
    diceValue = rollValue;
    return diceValue;
  });
  $("#button1").click(function() {
    p1TurnTotal = p1TurnTotal + diceValue;
    $(".outputP1").text(p1TurnTotal);
    if (p1TurnTotal >= 100){
      $(".win").show();
    } else {
      return p1TurnTotal;
    }
  });
  $("#button2").click(function() {
    p2TurnTotal = p2TurnTotal + diceValue;
    $(".outputP2").text(p2TurnTotal);
    if (p2TurnTotal >= 100){
      $(".win2").show();
    } else {
      return p2TurnTotal;
    }
  });
  $("#p1Total").click(function(){
    p1ScoreTotal = p1ScoreTotal + p1TurnTotal;
    $(".outputScore").text(p1ScoreTotal);
    p1TurnTotal = 0;
    $(".outputP1").text(p1TurnTotal);
    return;
  });
  $("#p2Total").click(function(){
    p2ScoreTotal = p2ScoreTotal + p2TurnTotal;
    $(".outputScore2").text(p2ScoreTotal);
    p2TurnTotal = 0;
    $(".outputP2").text(p2TurnTotal);
    return;
  });
  $("#reset").click(function(){
    p1TurnTotal = 0;
    $(".outputP1").text(p1TurnTotal);
  });
  $("#reset2").click(function(){
    p2TurnTotal = 0;
    $(".outputP2").text(p2TurnTotal);
  });
});
