const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var divisions = [];
var plinko = [];
var particle = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  ground= createGround(480, 800, 50, 50);

  particle=Bodies.circle(240,600,10);

}

function draw() {
  background(255,255,255);  
  ground.display();
  divisions.display();
particle.display();
plinko.display();
}