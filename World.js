// Taya Ambrose
// Email: tjambros@ucsc.edu
// CSE 160, Assignment 3

// From following Professor Davis' videos
// Looked at Plain ol' Bees for reference on multiple files and textures.
// I had issues with texture before this.

// Vertex shader program
var VSHADER_SOURCE = `
  precision mediump float;
  attribute vec4 a_Position;
  attribute vec2 a_UV;
  varying vec2 v_UV;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotateMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  void main() {
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
    v_UV = a_UV;
  }`

// Fragment shader program
// has room for more textures, I did not have time to implement them
var FSHADER_SOURCE = `
  precision mediump float;
  varying vec2 v_UV;
  uniform vec4 u_FragColor;
  uniform sampler2D u_Sampler0;
  uniform sampler2D u_Sampler1;
  uniform sampler2D u_Sampler2;
  uniform sampler2D u_Sampler3;
  uniform sampler2D u_Sampler4;
  uniform sampler2D u_Sampler5;
  uniform sampler2D u_Sampler6;
  uniform sampler2D u_Sampler7;
  uniform sampler2D u_Sampler8;
  uniform sampler2D u_Sampler9;
  uniform sampler2D u_Sampler10;
  uniform sampler2D u_Sampler11;
  uniform sampler2D u_Sampler12;
  uniform sampler2D u_Sampler13;

  uniform int u_WhichTexture;
  void main() {
    if (u_WhichTexture == -2) {                     // Use color
      gl_FragColor = u_FragColor;
    } else if (u_WhichTexture == -1) {              // Use UV debug color
      gl_FragColor = vec4(v_UV, 1.0, 1.0);
    } else if (u_WhichTexture == 0) {               // Use texture 0
      gl_FragColor = texture2D(u_Sampler0, v_UV);
    } else if (u_WhichTexture == 1) {               // Use texture 1
      gl_FragColor = texture2D(u_Sampler1, v_UV);
    } else if (u_WhichTexture == 2) {               // Use texture 2
      gl_FragColor = texture2D(u_Sampler2, v_UV);
    } else if (u_WhichTexture == 3) {               // Use texture 3
      gl_FragColor = texture2D(u_Sampler3, v_UV);
    } else if (u_WhichTexture == 4) {               // Use texture 4
      gl_FragColor = texture2D(u_Sampler4, v_UV);
    } else if (u_WhichTexture == 5) {               // Use texture 5
      gl_FragColor = texture2D(u_Sampler5, v_UV);
    } else if (u_WhichTexture == 6) {               // Use texture 6
      gl_FragColor = texture2D(u_Sampler6, v_UV);
    } else if (u_WhichTexture == 7) {               // Use texture 7
      gl_FragColor = texture2D(u_Sampler7, v_UV);
    } else if (u_WhichTexture == 8) {               // Use texture 8
      gl_FragColor = texture2D(u_Sampler8, v_UV);
    } else if (u_WhichTexture == 9) {               // Use texture 9
      gl_FragColor = texture2D(u_Sampler9, v_UV);
    } else if (u_WhichTexture == 10) {               // Use texture 10
      gl_FragColor = texture2D(u_Sampler10, v_UV);
    } else if (u_WhichTexture == 11) {               // Use texture 11
      gl_FragColor = texture2D(u_Sampler11, v_UV);
    } else if (u_WhichTexture == 12) {               // Use texture 12
      gl_FragColor = texture2D(u_Sampler12, v_UV);
    } else if (u_WhichTexture == 13) {               // Use texture 13
      gl_FragColor = texture2D(u_Sampler13, v_UV);
    } else {                                        // Error: use red
      gl_FragColor = vec4(1, 0.2, 0.2, 1);
    }
  }`

// create main function
function main() {
  // Set up canvas and gl variables
  setupWebGL();
  
  // Set up GLSL shader programs and connect GLSL variables.
  connectVariablesToGLSL();

  // Set up actions for the HTML UI elements
  addActionsForHtmlUI();

  //Create a new camera
  camera = new Camera();

  // Create keydown/keyup functions
  document.onkeydown = keydown;
  document.onkeyup = keyup;

  // Create click function
  canvas.onmousedown = click;

  // Register mousemove function
  document.onmousemove = mousemove;

  // Initialize Textures
  initTextures();

  // Specify the color for clearing <canvas>
  gl.clearColor(30/255.0, 125/255.0, 155/255.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  
  requestAnimationFrame(tick);
}
