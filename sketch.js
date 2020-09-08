var bullet, wall;
var speed , weight , thickness;




function setup() {
  createCanvas(1600,400);
    thickness = Math.round(random(22,83));
    speed =Math.round(random(223,321));
    weight =Math.round(random(30,52));
    bullet = createSprite(50, 200, 50, 50);
    bullet.shapeColor = "white";
    bullet.velocityX = speed;
    wall = createSprite(1200, 200, thickness, 200);
    wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
 
 if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet.position.x = 1180;
    var damage = 0.5 * weight * speed * speed /( thickness * thickness * thickness);
    console.log(damage);
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
       bullet.shapeColor = color(0,255,0);
    }
}
  drawSprites();
}


function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge >= wallLeftEdge) 
{
  return true
}

    return false;


}