var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)

  wall = createSprite(1250,200,thickness,200);
  wall.shapeColor = (80,80,80);

  bullet = createSprite(20, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor= "yellow";

  
}

function draw() {
  background("black");  

  bullet.collide(wall);

  if(hasCollided(bullet, wall)){
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

     if(damage>10){
        wall.shapeColor = "red";
      
     }
     if(damage<10){
      wall.shapeColor = "green";
     }

  }
  //if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  //{ 
  //  bullet.velocityX=0;
    //var deformation=0.5 * weight * speed * speed/22509;
   // if(deformation>180){
    //  bullet.shapeColor = color("red");
   // }
    //if(deformation<180 && deformation>100){
    //  bullet.shapeColor = color("blue");
   //}
    //if(deformation<100){
    //  bullet.shapeColor = color("green");
   // }
  //}

  drawSprites();

}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
      return true
  }
  return false;

}

