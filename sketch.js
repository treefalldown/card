// This is a template for creating a looping animation in p5.js (JavaScript).
// When you press the 'F' key, this program will export a series of images into
// your default Downloads folder. These can then be made into an animated gif.
// This code is known to work with p5.js version 0.6.0
// Prof. Golan Levin, 28 January 2018

// INSTRUCTIONS FOR EXPORTING FRAMES (from which to make a GIF):
// 1. Run a local server, using instructions from here:
//    https://github.com/processing/p5.js/wiki/Local-server
// 2. Set the bEnableExport variable to true.
// 3. Set the myNickname variable to your name.
// 4. Run the program from Chrome, press 'f'.
//    Look in your 'Downloads' folder for the generated frames.
// 5. Note: Retina screens may export frames at twice the resolution.

//===================================================
// User-modifiable global variables.
var myNickname = "Poster";
var nFramesInLoop = 6000;
var bEnableExport = true;

// Other global variables you don't need to touch.
var nElapsedFrames;
var bRecording;
// var theCanvas;

// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

Matter.use('matter-wrap');

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

let engine;
let canvas;

// Banham poster background
let backgroundImg;


// Maya and Albert
let park2022_500x500;



// Banham Fellows
let zherui_Wang;
let emily_Kutil;
let mustafa_Faruki;
let sarah_Gunawan;
let steven_Chodoriwsky;
let ang_Li;
let jordan_Carver;
let ludovico_Centis;
let thomas_Kelley;
let curt_Gambetta;
let kenny_Cupers;
let brian_Tabolt;
let michael_Kubo;
let eva_Franch_Gilabert;
let sergio_López_Piñeiro;
let jonathan_Solomon;
let hilary_Sample;
let grace_Ong;
let donald_Kunze;
let tsz_Yan_Ng;
let hugo_Dworza;


// Poster boundaries
let ground;
let wall_left;
let wall_right;

// Number of balls
let ball_01;
let ball_02;

let bar_03;
let bar_04;

let ball_05;

let bar_06;

let ball_07;
let ball_08;
let ball_09;
let ball_10;
let ball_12;
let ball_13;
let ball_14;

let bar_15;

let ball_16;

let bar_17;

let ball_18;
let ball_19;
let ball_20;
let ball_21;

let ball_22;
let bar_23;



let restitutionValue = 0.9

// Start y coordinates at where objects initial drop
let randomYPos = 500;
let randomYPos_02 = -500;

let multiplier = 2;

// Bar dimensions
let rectWidth = 80;
let rectHeight = 200;

// Circle radius
let circleRadius = 50;


function setup() {
  canvas = createCanvas(1200, 600);
  // canvas = createCanvas(2700, 3600);
  bRecording = false;
  nElapsedFrames = 0;


  // backgroundImg = loadImage('Poster_Background_00_web_800x600.png')

  // Maya and Albert
  park2022_500x500 = loadImage('Headshots/park2022_500x500.PNG');
//   park2022_500x500 = loadImage('Headshots/Poster_Emily.png');


  // Banham Fellows
  // zherui_Wang = loadImage('Headshots/Poster_Zherui.png');
  // emily_Kutil = loadImage('Headshots/Poster_Emily.png');
  // mustafa_Faruki = loadImage('Headshots/Poster_Mustafa.png');
  // sarah_Gunawan = loadImage('Headshots/Poster_Sarah.png');
  // steven_Chodoriwsky = loadImage('Headshots/Poster_Steven.png');
  // ang_Li = loadImage('Headshots/Poster_Ang.png');
  // jordan_Carver = loadImage('Headshots/Poster_Jordan.png');
  // ludovico_Centis = loadImage('Headshots/Poster_Ludo.png');
  // thomas_Kelley = loadImage('Headshots/Poster_Thomas.png');
  // curt_Gambetta = loadImage('Headshots/Poster_Curt.png');
  // kenny_Cupers = loadImage('Headshots/Poster_Kenny.png');
  // brian_Tabolt = loadImage('Headshots/Poster_Brian.png');
  // michael_Kubo = loadImage('Headshots/Poster_Michael.png');
  // eva_Franch_Gilabert = loadImage('Headshots/Poster_Eva.png');
  // sergio_López_Piñeiro = loadImage('Headshots/Poster_Sergio.png');
  // jonathan_Solomon = loadImage('Headshots/Poster_Jonathan.png');
  // hilary_Sample = loadImage('Headshots/Poster_Hilary.png');
  // grace_Ong = loadImage('Headshots/Poster_Grace.png');
  // donald_Kunze = loadImage('Headshots/Poster_Don.png');
  // tsz_Yan_Ng = loadImage('Headshots/Poster_TN.png');
  // hugo_Dworza = loadImage('Headshots/Poster_Hugo.png');

  // create an engine
  engine = Engine.create();


////////////////////////////////////////////////////////////////

  let randomYPosition = 250;

  // creates shapes
  // ball_01 = Bodies.circle(random(width), random(-randomYPos * multiplier, randomYPos_02), circleRadius);
  ball_01 = Bodies.circle(random(width), random(-randomYPos * 2, -randomYPos * 3), circleRadius);
  ball_01.restitution = restitutionValue;
  ball_01.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_02 = Bodies.circle(random(width), random(-randomYPos * 3, -randomYPos * 4), circleRadius);
  ball_02.restitution = restitutionValue;
  ball_02.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_03 = Bodies.rectangle(random(width), random(-randomYPos * 4, -randomYPos * 5), rectWidth, rectHeight);
  bar_03.restitution = restitutionValue;
  bar_03.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_04 = Bodies.rectangle(random(width), random(-randomYPos * 5, -randomYPos * 6), rectWidth, rectHeight);
  bar_04.restitution = restitutionValue;
  bar_04.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_05 = Bodies.circle(random(width), random(-randomYPos * 6, -randomYPos * 7), circleRadius);
  ball_05.restitution = restitutionValue;
  ball_05.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_06 = Bodies.rectangle(random(width), random(-randomYPos * 7, -randomYPos * 8), rectWidth, rectHeight);
  bar_06.restitution = restitutionValue;
  bar_06.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_07 = Bodies.circle(random(width), random(-randomYPos * 8, -randomYPos * 9), circleRadius);
  ball_07.restitution = restitutionValue;
  ball_07.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_08 = Bodies.circle(random(width), random(-randomYPos * 9, -randomYPos * 10), circleRadius);
  ball_08.restitution = restitutionValue;
  ball_08.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_09 = Bodies.circle(random(width), random(-randomYPos * 10, -randomYPos * 11), circleRadius);
  ball_09.restitution = restitutionValue;
  ball_09.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_10 = Bodies.circle(random(width), random(-randomYPos * 11, -randomYPos * 12), circleRadius);
  ball_10.restitution = restitutionValue;
  ball_10.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_11 = Bodies.circle(random(width), random(-randomYPos * 12, -randomYPos * 13), circleRadius);
  ball_11.restitution = restitutionValue;
  ball_11.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_12 = Bodies.circle(random(width), random(-randomYPos * 13, -randomYPos * 14), circleRadius);
  ball_12.restitution = restitutionValue;
  ball_12.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_13 = Bodies.circle(random(width), random(-randomYPos * 14, -randomYPos * 15), circleRadius);
  ball_13.restitution = restitutionValue;
  ball_13.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_14 = Bodies.circle(random(width), random(-randomYPos * 15, -randomYPos * 16), circleRadius);
  ball_14.restitution = restitutionValue;
  ball_14.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_15 = Bodies.rectangle(random(width), random(-randomYPos * 16, -randomYPos * 17), rectWidth, rectHeight);
  bar_15.restitution = restitutionValue;
  bar_15.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_16 = Bodies.circle(random(width), random(-randomYPos * 17, -randomYPos * 18), circleRadius);
  ball_16.restitution = restitutionValue;
  ball_16.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_17 = Bodies.rectangle(random(width), random(-randomYPos * 19, -randomYPos * 20), rectWidth, rectHeight);
  bar_17.restitution = restitutionValue;
  bar_17.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_18 = Bodies.circle(random(width), random(-randomYPos * 20, -randomYPos * 21), circleRadius);
  ball_18.restitution = restitutionValue;
  ball_18.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_19 = Bodies.circle(random(width), random(-randomYPos * 21, -randomYPos * 22), circleRadius);
  ball_19.restitution = restitutionValue;
  ball_19.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_20 = Bodies.circle(random(width), random(-randomYPos * 22, -randomYPos * 23), circleRadius);
  ball_20.restitution = restitutionValue;
  ball_20.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_21 = Bodies.circle(random(width), random(-randomYPos * 23, -randomYPos * 24), circleRadius);
  ball_21.restitution = restitutionValue;
  ball_21.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ball_22 = Bodies.circle(random(width), random(-randomYPos * 24), circleRadius);
  ball_22.restitution = restitutionValue;
  ball_22.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  bar_23 = Bodies.rectangle(random(width), random(-randomYPos * 24), rectWidth, rectHeight);
  bar_23.restitution = restitutionValue;
  bar_23.plugin.wrap = {
    min: { x: 0, y: 0 },
    max: { x: width, y: height }
  };

  ////////////////////////////////////////////////////////////////


  wall_left = Bodies.rectangle(-8, height, 50, height*20000, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.0000
  });
  wall_left.restitution = restitutionValue;
  wall_right = Bodies.rectangle(width+8, height, 50, height*20000, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.0000
  });
  wall_right.restitution = restitutionValue;


  ground = Bodies.rectangle(0, height+83, width*2, 200, {
    // ground = Bodies.rectangle(400, 500, 810, 25, {
    // isStatic: true, angle: Math.PI * 0.06
    isStatic: true, angle: Math.PI * 0.0000
  });
  ground.restitution = restitutionValue;


  // World.add(engine.world, [wall_left, wall_right, ground, ball_01, ball_02, bar_03, bar_04, ball_05, bar_06, ball_07, ball_08, ball_09, ball_10, ball_11, ball_12, ball_13, ball_14, bar_15, ball_16, bar_17, ball_18, ball_19, ball_20, ball_21, ball_22, bar_23]);
  World.add(engine.world, [wall_left, wall_right, ground, bar_03]);

  // setup mouse
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);
}

//===================================================
function keyTyped() {
  if (bEnableExport) {
    if ((key === 'f') || (key === 'F')) {
      bRecording = true;
      frameRate(20); // while we're exporting
      nElapsedFrames = 0;
    }
  }
}

function draw() {

  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) {
    percentCompleteFraction = float(nElapsedFrames) / float(nFramesInLoop);
  } else {
    percentCompleteFraction = float(frameCount % nFramesInLoop) / float(nFramesInLoop);
  }


  // Render the design, based on that percentage.
  // This function renderMyDesign() is the one for you to change.
  renderMyDesign(percentCompleteFraction);

  // If we're recording the output, save the frame to a file.
  // Note that the output images may be 2x large if you have a Retina mac.
  // You can compile these frames into an animated GIF using a tool like:
  if (bRecording && bEnableExport) {
    var frameOutputFilename = myNickname + "_frame_" + nf(nElapsedFrames, 4) + ".png";
    print("Saving output image: " + frameOutputFilename);
    saveCanvas(canvas, frameOutputFilename, 'png');
    nElapsedFrames++;

    if (nElapsedFrames >= nFramesInLoop) {
      bRecording = false;
      frameRate(60);
    }
  }

}

//===================================================
function renderMyDesign(percent) {
  //
  // THIS IS WHERE YOUR ART GOES.
  // This is an example of a function that renders a temporally looping design.
  // It takes a "percent", between 0 and 1, indicating where we are in the loop.
  // Use, modify, or delete whatever you prefer from this example.
  // This example uses several different graphical techniques.
  // Remember to SKETCH FIRST!

  //----------------------
  // here, I set the background and some other graphical properties
  background(255);


  drawVertices(ground.vertices);
  drawVertices(wall_left.vertices);
  drawVertices(wall_right.vertices);

  // image(backgroundImg, 0, 0)

  noStroke();
  fill(0);


  // Draw shapes
  // drawVertices(ball_01.vertices);
  // drawVertices(ball_02.vertices);
  //
  // drawVertices(bar_03.vertices);
  // drawVertices(bar_04.vertices);
  //
  // drawVertices(ball_05.vertices);
  // drawVertices(bar_06.vertices);
  // drawVertices(ball_07.vertices);
  // drawVertices(ball_08.vertices);
  // drawVertices(ball_09.vertices);
  // drawVertices(ball_10.vertices);
  // drawVertices(ball_11.vertices);
  // drawVertices(ball_12.vertices);
  // drawVertices(ball_13.vertices);
  // drawVertices(ball_14.vertices);
  //
  // drawVertices(bar_15.vertices);
  //
  // drawVertices(ball_16.vertices);
  //
  // drawVertices(bar_17.vertices);
  //
  // drawVertices(ball_18.vertices);
  // drawVertices(ball_19.vertices);
  // drawVertices(ball_20.vertices);
  // drawVertices(ball_21.vertices);

  // drawVertices(ball_22.vertices);
  // drawVertices(bar_23.vertices);
  //
  //
  // drawSprite(ball_01, hugo_Dworza);
  // drawSprite(ball_02, tsz_Yan_Ng);

  drawSprite(bar_03, park2022_500x500);


  // drawSprite(bar_03, donald_Kunze);
  // drawSprite(bar_04, grace_Ong);
  //
  // drawSprite(ball_05, hilary_Sample);
  //
  // drawSprite(bar_06, jonathan_Solomon);
  //
  // drawSprite(ball_07, sergio_López_Piñeiro);
  // drawSprite(ball_08, eva_Franch_Gilabert);
  // drawSprite(ball_09, michael_Kubo);
  // drawSprite(ball_10, brian_Tabolt);
  // drawSprite(ball_11, kenny_Cupers);
  // drawSprite(ball_12, curt_Gambetta);
  // drawSprite(ball_13, thomas_Kelley);
  // drawSprite(ball_14, ludovico_Centis);
  //
  // drawSprite(bar_15, jordan_Carver);
  //
  // drawSprite(ball_16, ang_Li);
  //
  // drawSprite(bar_17, steven_Chodoriwsky);
  //
  // drawSprite(ball_18, sarah_Gunawan);
  // drawSprite(ball_19, mustafa_Faruki);
  // drawSprite(ball_20, emily_Kutil);
  // drawSprite(ball_21, zherui_Wang);



  fill(255);

  drawMouse(mouseConstraint);

}

function drawMouse(mouseConstraint) {
  if (mouseConstraint.body) {
    var pos = mouseConstraint.body.position;
    var offset = mouseConstraint.constraint.pointB;
    var m = mouseConstraint.mouse.position;
    stroke(0, 255, 0);
    strokeWeight(2);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }
}

function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}

function drawSprite(body, img) {
  const pos = body.position;
  const angle = body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0);
  pop();
}
