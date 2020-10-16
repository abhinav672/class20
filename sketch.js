var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(255,255,255);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX; 
  console.log(movingRect.x-fixedRect.x); 

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.width/2+movingRect.width/2){
    
      //fixedRect.velocityX=fixedRect.velocityX*(-1);
    fixedRect.shapeColor="cyan";
    movingRect.shapeColor="cyan";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
}