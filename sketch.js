const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var avatar, avatar_img;

function preload(){
  avatar_img = loadImage("Avatar.jpg");
}

function setup() {
  createCanvas(displayWidth-20,  displayHeight-120);
  engine = Engine.create();
  world = engine.world;

  avatar = createSprite(100,500,50,50);
  avatar.addImage(avatar_img);
  avatar.scale = 0.5;
}

function draw() {
  background(0);  
  Engine.update(engine);
  drawSprites();
}