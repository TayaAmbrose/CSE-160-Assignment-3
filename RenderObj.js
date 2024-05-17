// Taya Ambrose
// Email: tjambros@ucsc.edu
// CSE 160, Assignment 3

// From following Professor Davis' videos
// Looked at Plain ol' Bees for reference on multiple files and textures.
// I had issues with texture before this.

// Draw every shape
function renderAllShapes() {
  // Check time at start of function
  var startTime = performance.now();

  // Pass the Projection matrix
  gl.uniformMatrix4fv(u_ProjectionMatrix, false, camera.projMat.elements);

  // Pass the View matrix
  gl.uniformMatrix4fv(u_ViewMatrix, false, camera.viewMat.elements);

  // Pass a matrix to u_GlobalRotateMatrix attribute
  var globalRotMat = new Matrix4().rotate(g_globalAngle_y, 0, 1, 0);
  globalRotMat.rotate(g_globalAngle_x, 1, 0, 0);
  gl.uniformMatrix4fv(u_GlobalRotateMatrix, false, globalRotMat.elements);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);



  // world

  // initial colors
  var caveFloor = [150/255, 100/255, 70/255, 1]; // light brown
  var caveWalls_color = [127/255, 194/255, 231/255, 1]; // brown

  // create ground
  var ground = new Cube();
  ground.textureNum = 0;
  ground.color = caveFloor;
  ground.matrix.translate(0, -0.75, 0);
  ground.matrix.scale(16, 0, 16);
  ground.matrix.translate(-0.5, 0, -0.5);
  ground.render();

  // create cave box
  var caveWalls = new Cube();
  caveWalls.textureNum = 1;
  caveWalls.color = caveWalls_color;
  caveWalls.matrix.scale(50, 50, 50);
  caveWalls.matrix.translate(-0.5, -0.5, -0.5);
  caveWalls.render();


  // draw map
  drawMap();

  // soot!
  var sootLoc = [g_sootX, 0, g_sootZ];
  var bodyCoordinates = renderSootBaby(0.8, sootLoc, g_sootRotation);

  // Check the time at end of the function
  var duration = performance.now() - startTime;
  sendTextToHTML(" ms: " + Math.floor(duration) + "&nbsp;&nbsp;  fps: " + Math.floor(10000/duration)/10, "numdot");
}
