//=============== CÓDIGO DO ATOR!

//posição inicial ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

//desenhar imagemDoAtor, definir a posição do Ator, altura e comprimento do ator
function mostraAtor(){  
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  //se a tecla estiver precionada, realizar o movimento para cima
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  //se a tecla estiver precionada, realizar o movimento para baixo
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
}


function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

//volta ator posição inicial
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

//placar do jogo
function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

//acrescentar um ponto
function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    somDosPontos.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}