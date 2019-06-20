// Business Logic //

//Naming a function of the dice roll and then something will call upon it BUT it will never execute anythig until its called upon.
function diceRoll() {
  //defining a variable to be used to store information later
  var rollResult = 0
  //storing a number that is random variable between 0-1 and we are taking that number and multiplying it by 6. .Random returns decimals.
  rollResult = Math.random() * 6;
  //because in lne8 we established a random decimal number this .floor method rounds down and stores new rounded number variable. Because it rounds down we add a 1 to make our range of numbers be 1-6
  var wholeRoll = Math.floor(rollResult) + 1;
  $(".outputRandom").text(wholeRoll);
  //display text form of whole role variable defined in line 10
  return wholeRoll
}

// User Interface Logic //
//wait until the web page is fully loaded before running any scrpt or js
$(document).ready(function() {
  //Place holder variables to set up definitions to be used later on in other fuctions. These are defined within the doc ready function to be able to speak to the more narrow functions
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
  // calls diceroll generates a random number, the ffunction that runs on the click
  $("#diceImg").click(function() {
    //first line of function that we run first. Created new variable that stores the result of diceRoll
    var rollValue = diceRoll();
    //takes the value of diceRoll function and moves it broader scope so that it can be accessed in other functions
    diceValue = rollValue;
    //moves you out of the current function and computer says "take the diceValue number and put it in the diceValue broads scope variables"
    // ends funtion to get computer to next function
    return diceValue;
  });
  //what is being clicked, .click is the action "something happens". the function says "this is what will happen"
  $("#button1").click(function() {
    //turn total + the number that we stored after the image click function runs because we defined it above.
    p1TurnTotal = p1TurnTotal + diceValue;
    //jquery: if calling a jquery function has to start with $. .text is the jq function. $(where it goes).text how"prints ot text"(What gets printed) $(where).how(what)
    $(".outputP1").text(p1TurnTotal);
    //evaluate if turn is greater than or equal to 100 show word defined in .html div class. whenever there is an If there will always be an else.
    if (p1TurnTotal >= 100){
      $(".win").show();
    } else {
      //because its not 100 keep displaying the total.
      return p1TurnTotal;
    }
  });
  //identical to player one but for player 2.
  $("#button2").click(function() {
    p2TurnTotal = p2TurnTotal + diceValue;
    $(".outputP2").text(p2TurnTotal);
    if (p2TurnTotal >= 100){
      $(".win2").show();
    } else {
      return p2TurnTotal;
    }
  });
  //Id in html assigned to a buttom gets clicked rest of lines below execute.
  $("#p1Total").click(function(){
    //score total equels current score total plus the current turn total and it saves it as the new value of P1ScoreTotal.
    p1ScoreTotal = p1ScoreTotal + p1TurnTotal;
    //added a dive class and now targeting that class and saying print as text what is defined in line65.
    $(".outputScore").text(p1ScoreTotal);
    //ok turn total we collected your value and stored it so now go back to stating 0.
    p1TurnTotal = 0;
    //now we actually show the value of 0.
    $(".outputP1").text(p1TurnTotal);
    //get your shit and get out of this current function.
    return;
  });
  //identical to player 1 but for 2.
  $("#p2Total").click(function(){
    p2ScoreTotal = p2ScoreTotal + p2TurnTotal;
    $(".outputScore2").text(p2ScoreTotal);
    p2TurnTotal = 0;
    $(".outputP2").text(p2TurnTotal);
    return;
  });
  //id reset when clicked perform this function. this case buttom
  $("#reset").click(function(){
    //sets it to 0
    p1TurnTotal = 0;
    //printing that its set to 0
    $(".outputP1").text(p1TurnTotal);
  });
  //identical to player 1
  $("#reset2").click(function(){
    p2TurnTotal = 0;
    $(".outputP2").text(p2TurnTotal);
  });
});
