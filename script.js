// diclaring the variables to get the elemnet by ID
var ele = document.getElementById("q1")
var ele1 = document.getElementById("q2");
var ele2 = document.getElementById("q3");
var ele3 = document.getElementById("q4");
var ele4 = document.getElementById("q5");
var ele5 = document.getElementById("q6");
if (ele) {
  ele.style.visibility = "hidden"; //using visiblity styles to hide by variable name
}
if (ele1) {
  ele1.style.visibility = "hidden";
}
if (ele2) {
  ele2.style.visibility = "hidden";
}
if (ele3) {
  ele3.style.visibility = "hidden";
}
if (ele4) {
  ele4.style.visibility = "hidden";
}
if (ele5) {
  ele5.style.visibility = "hidden";
}

var seconds = 60; // Global variables outside functions to use it for reducing ten seconds for wrong question
  var timer;
function startQuiz() {      // function to start the quiz
  q1.style.visibility = "visible";
  document.getElementsByClassName("btn").disabled = true;
  $("#head").hide();


  function myFunction() {   // function inside a function to start time on click of the startquizbutton.
    if (seconds < 60) { // I want it to say 1:00, not 60
      document.getElementById("time").innerHTML = seconds;
    }
    if (seconds > 0) { // so it doesn't go to -1
      seconds--;
    } else {
      clearInterval(timer);
      alert("Quiz time completed");
      displayScore();
    }
  };
  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000); // every second
    document.getElementById("time").innerHTML = "1:00";
  }
};
document.getElementById("startQuiz").addEventListener("click", startQuiz); //events to start quiz on click



var score = 0;
function validateAnswer(questionId, answer) {  //parameters inside function to get correct and wrond answers
  var q1 = document.getElementById("q2");
  var q2 = document.getElementById("q3");
  var q3 = document.getElementById("q4");
  var q4 = document.getElementById("q5");
  var q5 = document.getElementById("q6");

  switch (questionId) {

    case 1:
      q1.style.visibility = "visible";
      expectedAnswer = "Using arguments.length property";
      var result = document.getElementById("q1Result");   // Get the element with id="q1Result"
      document.getElementsByClassName("q1").disabled = true;
      if (answer === expectedAnswer) {
        result.style.color = "green";
        result.innerText = "Correct";
        score = score + 1;
      }
      else {
        result.style.color = "red";
        result.innerText = "Wrong";
        seconds = seconds - 10;
      }
      $("#q1").hide(2000);
      break;

    case 2:
      q2.style.visibility = "visible";
      document.getElementsByClassName("q2").disabled = true;
      expectedAnswer = "charAt()";
      var result = document.getElementById("q2Result");   // Get the element with id="q2Result"
      if (answer === expectedAnswer) {
        result.style.color = "green";
        result.innerText = "Correct";
        score = score + 1;  //for correct answer adding score by 1
      }
      else {
        result.style.color = "red";
        result.innerText = "Wrong";
       seconds = seconds - 10;  //wrong answer reducing timeby 10 seconds
      }
      $("#q2").hide(2000);
      break;

    case 3:
      q3.style.visibility = "visible";

      expectedAnswer = "toLowerCase()";
      var result = document.getElementById("q3Result");   // Get the element with id="q3Result"

      if (answer === expectedAnswer) {
        result.style.color = "green";
        result.innerText = "Correct";
        score = score + 1;
      }
      else {
        result.style.color = "red";
        result.innerText = "Wrong";
       seconds = seconds - 10;
      }
      $("#q3").hide(2000);
      break;

    case 4:
      q4.style.visibility = "visible";

      expectedAnswer = "append()";
      var result = document.getElementById("q4Result");   // Get the element with id="q4Result"

      if (answer === expectedAnswer) {
        result.style.color = "green";
        result.innerText = "Correct";
        score = score + 1;
      }
      else {
        result.style.color = "red";
        result.innerText = "Wrong";
       seconds = seconds - 10;
      }
      $("#q4").hide(2000);
      break;

    case 5:
      q5.style.visibility = "visible";
      expectedAnswer = "indexOf()";
      var result = document.getElementById("q5Result");   // Get the element with id="q5Result"

      if (answer === expectedAnswer) {
        result.style.color = "green";
        result.innerText = "Correct";
        score = score + 1;
      }
      else {
        result.style.color = "red";
        result.innerText = "Wrong";
       seconds = seconds - 10;
      }
      $("#q5").hide(2000);
      break;
  };
};
function displayScore() {
  var result = document.getElementById("q6").value;  
  var name = document.getElementById("fname").value;
  if (!name){     // condition asking for full name.
    alert("Please enter the Full Name")
    return;
  }
  $("#q6").hide(2000);
  alert( name + ' You have answered ' + score + ' questions correctly ');
};