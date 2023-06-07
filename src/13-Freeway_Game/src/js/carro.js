let widthCarro = 50;
let heightCarro = 40;
const xCarros = [600, 600, 600, 600, 600, 600];
const yCarros = [40, 96, 150, 210, 270, 318];
const velocidadeCarros = [ 2, 2.5, 3.2, 5, 3.3, 2.3];

function exibirCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    exibirImagem(imgCarros[i], imagemCarros[i], xCarros[i], yCarros[i], widthCarro, heightCarro); 
  }
  
}

function movimentarCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }  
  }
}

function passouTodaTela(xCarro) {
  return xCarro < -50;
}
