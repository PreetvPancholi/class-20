var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,200,75,75);
  
}

function draw() {
  background(255,255,255);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x  <fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y< fixedRect.height/2 + movingRect.height/2 
    && fixedRect.y - movingRect.y  <fixedRect.height/2 + movingRect.height/2 ){
   //290- 300 <=25+37.5
   //-10<=62.5

    fixedRect.shapeColor = "red";
   movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}