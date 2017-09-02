$(document).ready(function() {
    //  Set our number counter to 121 and our double-click preventer to 121
    var number = 121;
    var noEarlyCountDown = number - 1;

    $("#radioButtons1").hide();
    $("#radioButtons2").hide();
    $("#radioButtons3").hide();
    $("#radioButtons4").hide();
    $("#radioButtons5").hide();
    $("#radioButtons6").hide();
    $("#radioButtons7").hide();
    $("#radioButtons8").hide();

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  COUNTDOWN FUNCTION
    function run() {
      intervalId = setInterval(decrement, 1000);
      //$("button").remove();
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      if (number >-1) {
      	$("#show-number").html("Time Remaining:  " + number + " seconds");
      }

      // TRIVIA FUNCTION     
      $("#newTrivia1").html("Question 1:  What is the name of the children who assist Sherlock Holmes?");
      $("#radioButtons1").show();

      $("#newTrivia2").html("Question 2:  The 7% solution is a reference to what?");
      $("#radioButtons2").show();      

      $("#newTrivia3").html("Question 3:  Where does Sherlock Holmes store his tobacco?");
      $("#radioButtons3").show();      

      $("#newTrivia4").html("Question 4:  Whom couldn't Sherlock Holmes outwit?");
      $("#radioButtons4").show();

      $("#newTrivia5").html("Question 5:  Who was the real life inspiration for Sherlock Holmes?");
      $("#radioButtons5").show();

      $("#newTrivia6").html("Question 6:  Which NBA player wrote a novel featuring Sherlock's brother Mycroft Holmes?");
      $("#radioButtons6").show();

      $("#newTrivia7").html("Question 7: In 1999, Professor Emeritus John Radford estimated Sherlock Holmes' IQ at which of the following?");
      $("#radioButtons7").show();

      $("#newTrivia8").html("Question 8:  Whom did Sherlock Holmes consider to be the 'Napoleon of crime'?");
      $("#radioButtons8").show();      

      //  Once number hits zero...
      if (number === -1) {

        //  ...run the stop function.
        stop();
      }
    }

    //  FUNCTION TO STOP COUNTDOWN AT ZERO
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      var answerOne = $('input[name=radioA]:checked').val();
      var answerTwo = $('input[name=radioB]:checked').val();
      var answerThree = $('input[name=radioC]:checked').val();
      var answerFour = $('input[name=radioD]:checked').val();
      var answerFive = $('input[name=radioE]:checked').val();
      var answerSix = $('input[name=radioF]:checked').val();
      var answerSeven = $('input[name=radioG]:checked').val();
      var answerEight = $('input[name=radioH]:checked').val();

      if (answerOne === undefined) {
      	answerOne = 0;
      }

      if (answerTwo === undefined) {
      	answerTwo = 0;
      }

      if (answerThree === undefined) {
      	answerThree = 0;
      }

      if (answerFour === undefined) {
      	answerFour = 0;
      }

      if (answerFive === undefined) {
        answerFive = 0;
      }

      if (answerSix === undefined) {
        answerSix = 0;
      }

      if (answerSeven === undefined) {
        answerSeven = 0;
      }

      if (answerEight === undefined) {
        answerEight = 0;
      }

      var answerOne = parseInt (answerOne);
      var answerTwo = parseInt (answerTwo);
      var answerThree = parseInt (answerThree);
      var answerFour = parseInt (answerFour);
      var answerFive = parseInt (answerFive);
      var answerSix = parseInt (answerSix);
      var answerSeven = parseInt (answerSeven);
      var answerEight = parseInt (answerEight);
      var answerTotal = answerOne + answerTwo + answerThree + answerFour + answerFive + answerSix + answerSeven + answerEight;

      if (answerTotal === 0) {
      	$("#show-number").html("Time's Up!  You answered no questions correctly.  Read more Sherlock Holmes novels.  They're fantastic!");
      }

      if (answerTotal === 1) {
      	$("#show-number").html("Time's Up!  You answered one question correctly.  Read more Sherlock Holmes novels.  They're fantastic!");
      }

      if (answerTotal === 2) {
      	$("#show-number").html("Time's Up!  You answered two questions correctly.  Read more Sherlock Holmes novels.  They're fantastic!");
      }

      if (answerTotal === 3) {
      	$("#show-number").html("Time's Up!  You answered three questions correctly.  Try again.");
      }

      if (answerTotal === 4) {
      	$("#show-number").html("Time's Up!  You answered four questions correctly.  Meh.  That's 50% correct.");
      }   

      if (answerTotal === 5) {
        $("#show-number").html("Time's Up!  You answered five questions correctly.  Not bad!");
      }   
    
    if (answerTotal === 6) {
        $("#show-number").html("Time's Up!  You answered six questions correctly.  Impressive!");
      }   

    if (answerTotal === 7) {
        $("#show-number").html("Time's Up!  You answered seven questions correctly.  Very impressive!");
      }     
    
    if (answerTotal === 8) {
        $("#show-number").html("Time's Up!  You answered eight questions correctly.  Sherlock himself would be impressed!");
      }   

    $("#radioButtons1").hide();
    $("#radioButtons2").hide();
    $("#radioButtons3").hide();
    $("#radioButtons4").hide();
    $("#radioButtons5").hide();
    $("#radioButtons6").hide();
    $("#radioButtons7").hide();
    $("#radioButtons8").hide();

    $("#newTrivia1").html(" ");
    $("#newTrivia2").html(" ");
    $("#newTrivia3").html(" ");
    $("#newTrivia4").html(" ");
    $("#newTrivia5").html(" ");
    $("#newTrivia6").html(" ");
    $("#newTrivia7").html(" ");
    $("#newTrivia8").html(" ");

    }

    //  LISTENS FOR CLICK ON START
    $(".start").on("click", "button", function() {
        if (number > noEarlyCountDown) {
          run();
        }
    });

    //  LISTENS FOR CLICK ON FINISH
    $(".finish").on("click", "button", function() {
        stop();        
    });


});