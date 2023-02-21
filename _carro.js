//=============== CÓDIGO DO CARRO!

//vamos criar uma lista
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];//define em qual faixa esta o carro
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;



function mostraCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}



function movimentaCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}
function voltaPosicaoInicialCarros(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }      
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
}