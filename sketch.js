var ground,groundImage,backgroundImage,invisibleGround;
var hero,heroImage;
var zombie,zombie1,stupidZombieImage;
var ninjaZombie;
var bullet,bulletImage;
var ninjaZombieGroup,stupidZombieGroup;



function preload(){
 backgroundImage=loadImage("images/grave yard.jpg");
 heroImage=loadImage("images/runningShooter.png");
 zombie1=loadImage("images/zombie.png");
 groundImage=loadImage("images/ground.png");
 bulletImage=loadImage("images/bullet.png");
 stupidZombieImage=loadImage("images/stupid zombie.webp");


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  invisibleGround=createSprite(width/2,height-10,width,70);

  ground=createSprite(width/2,height,width,2);
  ground.addImage(groundImage);
  //ground.x=width/2;
  //ground.velocityX=-5;

  hero=createSprite(100,height-70,30,30);
  hero.addImage(heroImage);
  hero.scale=2;
  stupidZombieGroup= new Group();
  ninjaZombieGroup= new Group();



  
}


function draw() {
 background(backgroundImage);
if(keyDown("LEFT_ARROW")){
  hero.x=hero.x-2
}
if(keyDown("RIGHT_ARROW")){
  hero.x=hero.x+2;
}
if(keyDown("SPACE")){
  bullet=createSprite(20,10,20,20);
  bullet.addImage(bulletImage);
  bullet.x=hero.x+95;
  bullet.y=hero.y+10;
  bullet.velocityX=10;
}
 hero.collide(invisibleGround)
  spawnNinjaZombie();
  spawnStupidZombie();
 
  drawSprites();
}
function spawnNinjaZombie(){
  if(frameCount%80===0){
    ninjaZombie=createSprite(random(80,width-50),-40,20,20);
    ninjaZombie.addImage(zombie1);
    ninjaZombie.velocityY=+4;
    ninjaZombieGroup.add(ninjaZombie);

  }
}

function spawnStupidZombie(){
  if(frameCount%200===0){
    stupidZombie=createSprite(random(80,width-50),-40,20,20);
    stupidZombie.addImage(stupidZombieImage);
    stupidZombie.velocityY=+8;
    stupidZombie.scale=0.1;
    stupidZombieGroup.add(stupidZombie);
    

  }

}