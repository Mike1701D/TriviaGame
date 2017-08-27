$(document).ready(function() {
    //  Set our number counter to 46
    var number = 46;

    $("#radioButtons1").hide();
    $("#radioButtons2").hide();
    $("#radioButtons3").hide();
    $("#radioButtons4").hide();

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  COUNTDOWN FUNCTION
    function run() {
      intervalId = setInterval(decrement, 1000);
      $("button").remove();
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

      var answerOne = parseInt (answerOne);
      var answerTwo = parseInt (answerTwo);
      var answerThree = parseInt (answerThree);
      var answerFour = parseInt (answerFour);
      var answerTotal = answerOne + answerTwo + answerThree + answerFour;

      if (answerTotal === 0) {
      	$("#show-number").html("Time's Up!  Too bad.  You didn't answer any questions correctly.");
      }

      if (answerTotal === 1) {
      	$("#show-number").html("Time's Up!  You answered one question correctly.  Read more Sherlock Holmes novels.  They're fantastic!");
      }

      if (answerTotal === 2) {
      	$("#show-number").html("Time's Up!  You answered two questions correctly.  Read more Sherlock Holmes novels.  They're fantastic!");
      }

      if (answerTotal === 3) {
      	$("#show-number").html("Time's Up!  You answered three questions correctly.  Very impressive!");
      }

      if (answerTotal === 4) {
      	$("#show-number").html("Time's Up!  You answered all four questions correctly.  Sherlock Holmes himself would be impressed!");
      }   
    }

    //  LISTENS FOR CLICK ON START
    $(document).on("click", "button", function() {
        run();
    });

});