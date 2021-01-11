
var fixedRect,movingRect;

var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(800,600);
  
  fixedRect = createSprite(400,200,50,80);
  movingRect = createSprite(400,400,80,30);

  fixedRect.shapeColor ="blue";
  movingRect.shapeColor = "yellow";

  fixedRect.debug = true;
  movingRect.debug = true;

  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor ="green"
  gameobject2 = createSprite(100,200,50,50);
  gameobject2.shapeColor ="green"
  gameobject3 = createSprite(100,300,50,50);
  gameobject3.shapeColor ="green"
  gameobject4 = createSprite(100,500,50,50);
  gameobject4.shapeColor ="green"
  
}
function draw() {
  background("black"); 

  movingRect.x= mouseX;
  movingRect.y= mouseY; 
  
  console.log(movingRect.x - fixedRect.x)

  if (isTouching(movingRect,gameobject1)){
    gameobject1.shapeColor ="purple";
    movingRect.shapeColor = "purple";
  }
  else {
    gameobject1.shapeColor ="blue";
     movingRect.shapeColor = "yellow";
  }
  drawSprites();
}

