function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}


function draw() {
  mostraEstrada();
  mostraAtor();
  mostraCarros();
  
  movimentaCarros();
  movimentaAtor();
  voltaPosicaoInicialCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}




function mostraEstrada(){
  //chamando imagemDaEstrada
  background(imagemDaEstrada);  
}



