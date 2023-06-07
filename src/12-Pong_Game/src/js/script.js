const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

// fundo
let width = 600;
let height = 400;

//sons
const raquetada = new Audio('src/pong-sons/raquetada.mp3');
const ponto = new Audio('src/pong-sons/ponto.mp3');
var trilha = new Audio('src/pong-sons/trilha.mp3');

function draw(){
  limparTela();
  
  desenharBolinha(xBolinha, yBolinha, raio);
  desenharRaquete(xRaquete, yRaquete);
  desenharRaquete(xRaqueteOponente, yRaqueteOponente);

  movimentarBolinha();
  movimentarRaqueteOponente();

  verificarColisaoParede();
  verificarColisaoRaquete();

  incluirPlacar();
  marcarPonto();

  bolinhaNaoFicaPresa();

  trilha.play();
  trilha.loop = true;
}
setInterval(draw, 10);


function limparTela() {
  pincel.fillStyle = 'black';
  pincel.fillRect(0, 0, width, height);
}