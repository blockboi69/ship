var sea,ship
function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",)
seaImg1 = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea.addImage("sea",seaImg1)
  ship.addAnimation("shipping",ship)
}

function draw() {
  background("blue");
    drawSprites();
  sea = createSprite(200,200,200,200)
 sea.velocityX=2
  ship = createSprite(200,200,200,200)
 if (sea.x < 0){
 sea.x = sea.width/2;

 }
}
