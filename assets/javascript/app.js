$(document).ready(function() {
    //  Set our number counter to 46
    var number = 46;
    var noMultiClick = 0;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  COUNTDOWN FUNCTION
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("Time Remaining:  " + number + " seconds");

      // TRIVIA FUNCTION
      $("#newTrivia1").html("Question 1:  Which of the following is one of Holmes' hobbies?");
      // Astronomy
      // Bee keeping
      // Space tourism

      $("#newTrivia2").html("Question 2:  What is the name of the youth who assist Sherlock Holmes?");
      // The Baker Street Irregulars
      // The Unseen Youth
      // The Hidden Ones

      $("#newTrivia3").html("Question 3:  Sherlock's 7 percent solution is a reference to what?");
      // Sherlock's use of probability to solve crimes
      // The concentration of concaine Sherlock uses to self-medicate
      // Sherlock's belief that 93% of people are dishonest when unsupervised

      $("#newTrivia4").html("Question 4:  Where does Sherlock Holmes store his tobacco?");
      // In a jar
      // In his slipper
      // In a hollowed book

      $("#newTrivia5").html("Question 5:  Who couldn't Sherlock Holmes defeat?");
      // Irene Adler
      // Professor Moriarty
      // Inspector Lestrade

      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  FUNCTION TO STOP COUNTDOWN AT ZERO
    function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  LISTENS FOR CLICK ON START
    $(document).on("click", "button", function() {
      if (noMultiClick === 0) {
        run();
      }
      noMultiClick = 1;

    });

});


