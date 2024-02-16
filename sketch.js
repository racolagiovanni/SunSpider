function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, 220, 200);
  strokeWeight(0);
 
  const c = color(255, 240, 20);
  fill(c);
  square(100, 50, 45);
  
  rectMode(CENTER);
  fill(250, 120, 200);
  square(250, 250, 200);
  rect(120, 250, 50, 200);
  rect(80, 250, 15, 200);
  
  quad(120, 130, 180, 130, 180, 70, 20, 70);
  triangle(360, 75, 358, 20, 286, 75);

  strokeWeight(5);
  noFill();
  square(-30, 250, 200);
  
  fill(255, 240, 20);
  strokeWeight(10);
  line(0, 0, 300, 360);
  line(10,420,900,100);
  line(250,0,500,600);

  ellipse(320, 300, 300, 250);
  strokeWeight(0);
  fill(250, 100, 100);
  ellipse(170, 290, 120, 50);
  ellipse(350, 320, 150, 100);
  ellipse(90, 200, 90, 40);
  ellipse(150, 120, 70, 35);

  ellipseMode(RADIUS);
  fill(255, 240, 20);
  ellipse(300, 100, 60, 30);
  ellipseMode(CENTER);
  fill(250, 100, 100);
  ellipse(250, 100, 60, 30);

  strokeWeight(10);
  fill(150, 220, 200);
  circle(350, 320, 50);
  strokeWeight(0);
  square(575, 20, 55);
  
  strokeWeight(15);
  point(150,50);
  point(100,50);
  
}
