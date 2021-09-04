var square1, square2;

function setup() {
  createCanvas(800,800);
  square1 = createSprite(400, 200, 50, 50);
  square1.setCollider("rectangle",0,0,50,50);
  square1.debug = true;

  square2 = createSprite(200,400,50,50);
  square2.shapeColor = "red";
  square2.setCollider("rectangle",0,0,50,50);
  square2.debug = true;
}

function draw() {
  background(255,255,255);
  
  square1.x = World.mouseX;
  square2.y = World.mouseY;

  if(square2.x - square1.x < square1.width/2 + square2.width/2 && square1.x - square2.x < square2.width/2 + square1.width/2 && square2.y - square1.y < square1.height/2 + square2.height/2 && square1.y - square2.y < square2.height/2 + square1.height/2){
    square1.shapeColor = "blue";
    square2.shapeColor = "blue";
  }

  else{
    square1.shapeColor = "yellow";
    square2.shapeColor = "red";
  }

  drawSprites();
}