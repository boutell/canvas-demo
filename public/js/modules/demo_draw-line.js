//
//  DRAWING LINES
//
//  Four Methods to Draw a Line
/*
    ctx.beginPath()    // Tells the canvas that we are going to start drawing. Starts a new path.
    ctx.moveTo()       // Takes x,y values for the starting point of the line
    ctx.lineTo()       // Draws a line from the current position to the x,y provided as arguments
    ctx.stroke()       // Indicates to canvas that the path we're drawing should have a stroke, or an outline or line on the path we've set.
*/

$(function(){

  // Init Canvas
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // set 300x300
  canvas.width = 300;
  canvas.height = 300;

  // * EXAMPLE * (my initials)

  ctx.beginPath()
  ctx.moveTo(2, 1);
  ctx.lineTo(36, 1);
  ctx.moveTo(19, 1);
  ctx.lineTo(19, 41);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(40, 1);
  ctx.quadraticCurveTo(78, 11, 40, 21);
  ctx.quadraticCurveTo(78, 31, 40, 41);
  ctx.lineTo(40, 1);
  ctx.stroke();

});


//  Canvas Axis ===============
//
//  0 1 2 3 4 5 6 7 8 9
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9


// Other Options ===============

// ctx.strokeStyle = '#ff0000';  // set stroke color
// ctx.lineWidth = 1;            // set line width
//
// var gradient = ctx.createLinearGradient(0,0,170,0);  // set gradient as stroke
// gradient.addColorStop("0","magenta");
// gradient.addColorStop("0.5","blue");
// gradient.addColorStop("1.0","red");
// ctx.strokeStyle = gradient;
