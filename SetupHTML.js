// Taya Ambrose
// Email: tjambros@ucsc.edu
// CSE 160, Assignment 3

// From following Professor Davis' videos
// Looked at Plain ol' Bees in the hall of fame for reference on multiple files and textures.
// I had issues with texture before this.

// create constants for animation
const ON = 1;
const OFF = 0;
const tap = 2;

// set globals for UI elements
let g_animationSpeed = 4;
let g_globalAngle_y = 0;  // y axis rotation
let g_globalAngle_x = 0;  // x axis rotation
let g_animation = OFF;

// Set up actions for the HTML UI elements
function addActionsForHtmlUI() {
  document.getElementById('stoneButton').onclick = function() {
    g_blockType = darkRock;
  };
}

// Set the text of an HTML element
function sendTextToHTML(text, htmlID) {
  var htmlElm = document.getElementById(htmlID);
  if (!htmlElm) {
    console.log("Failed to get " + htmlID + " from HTML");
    return;
  }
  htmlElm.innerHTML = text;
}
