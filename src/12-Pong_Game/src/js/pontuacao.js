// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;
let chanceErrar = 0;

function marcarPonto() {
  if ((xBolinha + raio) > width) {
    meusPontos++;
    ponto.play();
  }
  if ((xBolinha - raio) < 0) {
    pontosOponente++;
    ponto.play();
  }
  
}

function incluirPlacar() {
  pincel.fillStyle = 'orange';
  pincel.fillRect(150, 10, 40, 20);
  pincel.fillRect(450, 10, 40, 20);
  
  pincel.strokeStyle = 'white';
  pincel.strokeRect(150, 10, 40, 20);
  pincel.strokeRect(450, 10, 40, 20);
  
  pincel.fillStyle ='white';
  pincel.textAlign = 'center';
  pincel.font='20px Georgia';
  pincel.fillText(meusPontos, 170, 26);
  pincel.fillText(pontosOponente, 470, 26);
  
}

