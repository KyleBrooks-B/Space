var astronaut,bg,sleep,brush,gym,eat,drink,move;


function preload(){
bg = loadImage("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("brush.png");
gym = loadAnimation("gym1.png", "gym2.png", "gym11", "gym12.png");
eat = loadAnimation("eat1.png", "eat2.png");
drink = loadAnimation("drink1.png", "drink2.png");
move = loadImage("move.png", "move1.png");

}


function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(220);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}