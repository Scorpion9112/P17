var monkey , monkey_running
var bananaImage, obstacleImage
var foodsGroup, obstacleGroup
var score
var ground
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey1= createSprite(100,265,50,50)
monkey1.addAnimation("monkey",monkey_running)
monkey1.scale=.1
  
ground=createSprite(400,300,900,10)
foodsGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white")
 drawSprites() 
  ground.velocityX=4
  ground.x=ground.width/2
  console.log(ground.x)
  monkey1.velocityY=+1
  monkey1.collide(ground)
  if(keyWentDown("space")){
    monkey1.y=monkey1.y-30
  }
  spawnBananas()
  spawnObstacles()
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,200,10)
}
function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,280,20,30);
    
    // obstacle.debug = true
  
    obstacle.velocityX =-3;
    
    //generate random obstacles
     obstacle.addImage(obstacleImage);
              
       
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacle.depth +=1;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}
function spawnBananas() {
  if(frameCount % 60 === 0) {
    var banana = createSprite(400,height-195,20,30);
    banana.y = Math.round(random(100,220));
    // obstacle.debug = true
  
    banana.velocityX =-3;
    
    //generate random obstacles
     banana.addImage(bananaImage);
              
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 300;
    monkey1.depth +=1;
    //add each obstacle to the group
    foodsGroup.add(banana);
  }
}





