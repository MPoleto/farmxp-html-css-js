// raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 5;
let alturaRaquete = 90;

// raquete oponente
let xRaqueteOponente = 590;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let numero = 10;

// retangulo
function desenharRaquete(x, y) {
  pincel.fillStyle = 'white';
  pincel.fillRect(x, y, larguraRaquete, alturaRaquete);
}

// movimentar raquete
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; 
    }
    if (event.key == "ArrowDown" && (yRaquete + alturaRaquete) < (height + 1)) {
      yRaquete+=20;
    }
    if (event.key == "ArrowUp" && yRaquete > -1) {
      yRaquete-=20;
    }
    // opcional para 2 jogadores
    // if (event.key == "w") {
    //   yRaqueteOponente+=10;
    // }
    // if (event.key == "s") {
    //   yRaqueteOponente-=10;
    // }
    event.preventDefault();
  },
  true
);

function movimentarRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceErrar;
  
  manterRaqueteDentroDaArea(yRaqueteOponente)

  calcularChanceErrar();
}

function verificarColisaoRaquete() {
  if((xBolinha - raio) < (xRaquete + larguraRaquete) 
    && (yBolinha - raio) < (yRaquete + alturaRaquete) 
    && (yBolinha + raio) > yRaquete) {

      velocidadeXBolinha *= -1;
      raquetada.play();
    }

  if((xBolinha + raio) > xRaqueteOponente 
    && (yBolinha - raio) < (yRaqueteOponente + alturaRaquete) 
    && (yBolinha + raio) > yRaqueteOponente) {

    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function manterRaqueteDentroDaArea(raquete) {
  if (raquete < -1) raquete = 0;
  else if(raquete + alturaRaquete > height) raquete = height;
}


function calcularChanceErrar() {
  while (numero >= chanceErrar+5 || numero < chanceErrar-5) {
    numero = Math.floor(Math.random() * (70 - (-70)) + (-70));
  } 
    chanceErrar = numero;
    numero = chanceErrar+5;
}

