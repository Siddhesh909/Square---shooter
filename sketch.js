const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(625,450,430,20);
    ground2 = new Ground(1000 , 200 , 350 , 20);

    box1 = new Box(625,430,45,60);
    box2 = new Box(625,380,45,60);
    box3 = new Box(625,330,45,60);
    box4 = new Box(625,280,45,60);
    box5 = new Box(570,430,45,60);
    box6 = new Box(570,380,45,60);
    box7 = new Box(570,330,45,60);
    box8 = new Box(515,430,45,60);
    box9 = new Box(515,380,45,60);
    box10= new Box(460,430,45,60);

    box11= new Box(680,430,45,60);
    box12= new Box(680,380,45,60);
    box13= new Box(680,330,45,60);
    box14= new Box(740,430,45,60);
    box15= new Box(740,380,45,60);
    box16= new Box(795,430,45,60);

// fgdsuygfsdhfaygdyahfakudgyjagsdukadghgfyuasgfukgaigfdyuagsigf

    box17 = new Box(1000,180,45,40);
    box18 = new Box(1000,140,45,40);
    box19 = new Box(1000,100,45,40);
    box20 = new Box(1000,60,45,40);
    box21 = new Box(950,180,45,40);
    box22 = new Box(950,140,45,40);
    box23 = new Box(950,100,45,40);
    box24 = new Box(900,180,45,40);
    box25 = new Box(900,140,45,40);
    box26 = new Box(850,180,45,40);

    box27 = new Box(1050,180,45,40);
    box28 = new Box(1050,140,45,40);
    box29 = new Box(1050,100,45,40);
    box30 = new Box(1100,180,45,40);
    box31 = new Box(1100,140,45,40);
    box32 = new Box(1150,180,45,40);

    bird = new Bird(200,450);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:225 , y:350});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode = 32){
        slingshot.attach(bird.body);
    }
}