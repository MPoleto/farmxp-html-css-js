// bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

 // circulo
 function desenharBolinha(x, y, raio){
  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function movimentarBolinha() {
  xBolinha+= velocidadeXBolinha;
  yBolinha+= velocidadeYBolinha;
}

function verificarColisaoParede() {
  if((xBolinha + raio) > width || 
    (xBolinha - raio) < 0) velocidadeXBolinha *= -1;
  if((yBolinha + raio) > height || 
    (yBolinha - raio) < 0) velocidadeYBolinha *= -1;
}

function bolinhaNaoFicaPresa() {
  if (xBolinha - raio < 0){
    xBolinha = 23;
  }

  if (xBolinha + raio > width){
    xBolinha -= 23;
  }
}