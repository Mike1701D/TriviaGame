$(document).ready(function() {
    //  Set our number counter to 46
    var number = 46;
    var noMultiClick = 0;

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
      $("#show-number").html("Time Remaining:  " + number + " seconds");

      // TRIVIA FUNCTION
      $(function() {
        $("#radio").buttonset();
      });
      
      $("#newTrivia1").html("Question 1:  What is the name of the children who assist Sherlock Holmes?");
      $("#radioButtons1").show();

      $("#newTrivia2").html("Question 2:  The 7% solution is a reference to what?");
      $("#radioButtons2").show();      

      $("#newTrivia3").html("Question 3:  Where does Sherlock Holmes store his tobacco?");
      $("#radioButtons3").show();      

      $("#newTrivia4").html("Question 4:  Whom couldn't Sherlock Holmes outwit?");
      $("#radioButtons4").show();      

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


// function myFunction() {
 ///   var els = document.getElementsByName('ribbon_1');
 //   for (var i = 0; i < els.length; i++) {
 //       if (els[i].checked) {
 //           document.getElementById("demo").innerHTML = els[i].value;
 //       }
 //   }
//}