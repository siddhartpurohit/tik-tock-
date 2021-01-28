var h ,s, m;
var hrAngle,mnAngle,scAngle;
var rect;

function setup(){
    createCanvas(800,800);
}

function draw() {
  background("black");
  hr = hour() % 12;
  sc = second();
  mn = minute();
  
  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  
  angleMode(DEGREES);
  push();
  stroke("blue");
  strokeWeight(7);
  translate(400, 200);
  rotate(hrAngle);  
  line(0, 0, 0, -60);
  pop();


  push();
  stroke("green");
  strokeWeight(7);
  translate(400, 200);
  rotate(mnAngle);  
  line(0, 0, 0, -80);
  pop();


  push();
  stroke("red");
  strokeWeight(7);
  translate(400, 200);
  rotate(scAngle);  
  line(0, 0, 0, -100);
  pop();
  
  
  push();
  angleMode(DEGREES);
  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(400, 200, 220, 220, -90, hrAngle - 90);
  pop();


  push();
  angleMode(DEGREES);
  stroke("green");
  strokeWeight(7);
  noFill();
  arc(400, 200, 240, 240, -90, mnAngle - 90);
  pop();


  push();
  angleMode(DEGREES);
  stroke("red");
  strokeWeight(7);
  noFill();
  arc(400, 200, 260, 260, -90, scAngle - 90);
  pop();

  push();
  fill("white");
  
  strokeWeight(2);
  rectMode(CENTER);
  rect(400, 500, 320, 80)
  pop();
  
  textSize(50);
  fill("blue");
  noStroke();
  text(hr , 280, 520);
  fill("green");
  text(mn, 370, 520);
  fill("red");
  text(sc, 460, 520);
  fill("black");
  strokeWeight(1);
  stroke("black");
  textSize(50);
  text(":      :", 345, 516)
}