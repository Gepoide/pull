let origin = {
  x: 400,
  y: 440,
  radius: 2000,
};

let circleSize = 30;
let cursorSize = 30;
let seed;
let a, r, x, y;
let t = 1;

let font1 = "SuisseIntl-Light.otf";

function preload() {
  suisseLight = loadFont(font1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
  noCursor();
}
function mousePressed() {
  return false;
}

function draw() {
  background(0);
  randomSeed(seed);

  origin.x = mouseX;
  origin.y = mouseY;

  if (mouseIsPressed) {
    circleSize = min(circleSize + 5, 80);
    cursorSize = min(cursorSize + 10, 160);
  } else {
    circleSize = max(circleSize - 5, 30);
    cursorSize = max(cursorSize - 10, 30);
  }

  for (var i = 0; i < 250; i++) {
    a = random(0, 2 * PI);

    r = 12 * sqrt(random(0, origin.radius));

    x = width / 2 + r * cos(a);
    y = height / 2 + r * sin(a);

    translate(x, y);
    rotate(atan2(y - origin.y, x - origin.x));
    stroke(255);
    strokeWeight(1);
    fill(0);
    rect(-circleSize * 2, -circleSize * 2, 30, 30, 15);
    textAlign(CENTER, TOP);
    fill(255);
    noStroke();
    textSize(10);
    //textFont(suisseLight)
    text(i, -circleSize * 2, -circleSize * 2);
    resetMatrix();
  }
  fill(0);
  stroke(255);
  ellipse(origin.x, origin.y, cursorSize);

  noFill();
  stroke(255);
  strokeWeight(2);
  translate(origin.x, origin.y);
  rotate(Math.PI / 4);
  drawCross(0, 0, cursorSize / 2);
  resetMatrix();
}

function drawCross(x, y, size) {
  line(x - size / 2, y - size / 2, x + size / 2, y + size / 2);
  line(x + size / 2, y - size / 2, x - size / 2, y + size / 2);
}
