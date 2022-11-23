var house;
var man,manImg;
var knob;
var ghost;
var voice;
var spider1,spider2,spider3,spider4;
var spImg1,spImg2,spImg3,spImg4;


function preload()
{
house = loadImage("hauntedhouse.png");
manImg = loadImage("man.png");
ghost = loadImage("ghost.jpg");
voice = loadSound("scream.mp3");
spImg1 = loadImage("spider2.png");
spImg2 = loadImage("spider2.png");
spImg3 = loadImage("spider2.png");
spImg4 = loadImage("spider2.png");

}

function setup()
{
createCanvas(1200,800);
man = createSprite(1100,700,50,50);
man.addImage(manImg);
man.scale = 0.1;

knob = createSprite(400,550,30,30);

spider1 = createSprite(250,100,50,50);
spider1.addImage(spImg1);
spider1.scale = 0.1;

spider2 = createSprite(450,600,50,50);
spider2.addImage(spImg2);
spider2.scale = 0.1;

spider3 = createSprite(650,100,50,50);
spider3.addImage(spImg3);
spider3.scale = 0.1;

spider4 = createSprite(850,600,50,50);
spider4.addImage(spImg4);
spider4.scale = 0.1;



}

function draw()
{
background(house);

spider1.velocityY = +2;
spider2.velocityY = -2;
spider3.velocityY = +2;
spider4.velocityY = -2;

if(keyDown(LEFT_ARROW))
{
man.x = man.x - 10;
}

if(keyDown(RIGHT_ARROW))
{
man.x = man.x + 10;
}

if(keyDown(UP_ARROW))
{
man.y = man.y - 10;
}

if(keyDown(DOWN_ARROW))
{
man.y = man.y + 10;
}

if(man.isTouching(spider1))
{
man.x = 1500;
man.y = 1400;
Text("gameOver",850,400);

voice.play();
}

if(man.isTouching(knob))
{
knob.addImage(ghost);
voice.play();
}



drawSprites();
}

