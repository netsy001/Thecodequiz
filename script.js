var ele = document.getElementById("q1")
var ele1 = document.getElementById("q2");
var ele2 = document.getElementById("q3");
var ele3 = document.getElementById("q4");
var ele4 = document.getElementById("q5");
var ele5 = document.getElementById("q6");
if (ele) {
  ele.style.visibility = "hidden";
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

var seconds = 60;
  var timer;
function startQuiz() {
  q1.style.visibility = "visible";
  document.getElementsByClassName("btn").disabled = true;
  document.getElementById("head").style.visibility = "hidden";

  function myFunction() {
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
document.getElementById("startQuiz").addEventListener("click", startQuiz);



var score = 0;
function validateAnswer(questionId, answer) {
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
      document.getElementById("q1").style.visibility = "hidden";
      break;

    case 2:
      q2.style.visibility = "visible";
      document.getElementsByClassName("q2").disabled = true;
      expectedAnswer = "charAt()";
      var result = document.getElementById("q2Result");   // Get the element with id="q2Result"
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
      document.getElementById("q2").style.visibility = "hidden";
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
      document.getElementById("q3").style.visibility = "hidden";
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
      document.getElementById("q4").style.visibility = "hidden";
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
      document.getElementById("q5").style.visibility = "hidden";
      break;
  };
};
function displayScore() {
  var result = document.getElementById("q6").value;  
  var name = document.getElementById("fname").value;
  if (!name){
    alert("Please enter the Full Name")
    return;
  }
  document.getElementById("q6").style.visibility = "hidden";
  alert( name + ' You have answered ' + score + ' questions correctly ');
};