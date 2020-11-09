var fixedRect, movingRect;
var tom,jerry;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  tom = createSprite (0,400,50,100);
  tom.velocityX = 5;

  jerry = createSprite (1200,400,100,50);
  jerry.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  bounceOff(tom,jerry)
  bounceOff(fixedRect,movingRect)
  drawSprites();
}

