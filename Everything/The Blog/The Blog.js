function changeBG() {
  var colorValue = prompt("What background color?");
  document.body.style.backgroundColor = colorValue;
}

function changeTextColor() {
  var colorValue = prompt("What text color?");
  document.body.style.color = colorValue
}

function welcomeMessage() {
  var name = prompt("What is your name?");
  var message = "<h1>Hello " + name + "&#x263A</h1>";
  document.getElementById("line1").innerHTML = message;
}

function changeButtonColor() {
  var colorValue = prompt("What color 'Hello' button?");
  document.getElementById("hello").style.color = colorValue
}

function pageSubscribe() {
  window.location.href = "https://www.youtube.com/channel/UC8efqwNhi_QcBM_AUAvW4Vg"
}