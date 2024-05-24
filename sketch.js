let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//raquete
let xraquete = 5;
let yraquete = 150;
let compraquete = 10;
let raquetealtura = 90;

let xraqueteoponente = 585;
let yraqueteoponente = 150;
let velocidayoponente;

let colidiu = false;

let meusPontos = 0;
let pontosDoOponente = 0;

let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
    background(0);
    mostrabolinha();
    movimentabolinha();
    verificacolisao();
    raquete(xraquete, yraquete);
    movimentoraquete();
    colisaoraquete(xraquete,yraquete);
    raquete(xraqueteoponente, yraqueteoponente);
    movimentaraqueteoponente();
    colisaoraquete(xraqueteoponente,yraqueteoponente);
    incluiplacar();
    marcaPonto();
}

function mostrabolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentabolinha() {
  xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificacolisao() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function raquete(x,y){
  rect(x, y, compraquete, raquetealtura);
}

function movimentoraquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}

function colisaoraquete(x,y) {
  colidiu = collideRectCircle(x, y, compraquete, raquetealtura, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function  movimentaraqueteoponente(){
   if (keyIsDown(87)){
    yraqueteoponente -= 10;
  }
  if (keyIsDown(83)){
    yraqueteoponente += 10;
  }
}

function incluiplacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(139, 0, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 470, 26);
  fill(color(34, 139, 34));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 170, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    pontosDoOponente += 1
    ponto.play();
  }
  if(xBolinha < 10){
    meusPontos += 1
    ponto.play();
  }
}



  


  
  

 


