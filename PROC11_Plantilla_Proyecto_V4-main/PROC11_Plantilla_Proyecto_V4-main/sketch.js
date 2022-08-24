
var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
 
}








function setup(){
  createCanvas(400,400);
  background("blue");

  
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(200,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

}







function draw() {
  background(200);
  
//Presionar la trecla de espacio para mover el fondo
 if(keyDown("space")){
  sea.velocityX=-3;
 }


 //Codigo para reiniciar el fondo
 //Cuando se acaba el fondo se pone gris, pero si nos esperamos un momento vuelve a aparecer el fondo y asi repetitivamente
 if (sea.x <0) {
   sea.x=sea.width/2;
 }


  drawSprites();
}