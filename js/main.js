// Colorful Colors Start Code

// Load Colors from Text File
let colors;
fetch("web-colors.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (colors = strData.split(/\r?\n/)));

// Output Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all") {
    displayAll();
  } else if (selection === "start-letter") {
    displayStartingLetter();
  } else if (selection === "random") {
    randomColor();
  }
}

// Menu Functions
function displayAll() {
  outputEl.innerHTML = "";
  for (var i = 0; i < colors.length; i++) {
    outputEl.innerHTML += `<div style="background-color: ${colors[i]}">${colors[i]}<br><div>`;
  }
}

function displayStartingLetter() {
  var choice = prompt("Enter a letter");
  outputEl.innerHTML = "";
  for (var i = 0; i < colors.length; i++) {
    if (colors[i].charAt(0) == choice) {
      outputEl.innerHTML += `<div style="background-color: ${colors[i]}">${colors[i]}<br><div>`;
    }
  }
}

function randomColor() {
  outputEl.innerHTML = "";
  var rand = randomInt(0, colors.length);
  outputEl.innerHTML += `<div style="background-color: ${colors[rand]}">${colors[rand]}<br><div>`;
}
