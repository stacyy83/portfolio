// by Wen
let xoff;
let a_o;
let y_o;
function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvasContainer");
  createCanvas(400, 400);
  xoff = 0.0;
  a_o = 0;
  y_o = 0;
}

function draw() {
  background(17, 91, 70);
  noFill();
  stroke(204,255,238);
  strokeWeight(5);
  if (mouseIsPressed){
  beginShape();  
  for(let x = 0; x < width; x++){
  y_o = map(noise(xoff), 0, 1, -50,50);
  vertex(x,200+y_o);   
  xoff += 0.03;
  } 
  endShape();
  }

}