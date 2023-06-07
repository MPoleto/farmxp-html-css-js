let xAtor = 85;
let yAtor = 366;
let tamanhoAtor = 30;
let meusPontos = 0;

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; 
    }
    if (event.key == "ArrowDown" && yAtor < 366) {
      yAtor+=3;
    }
    if (event.key == "ArrowUp" && yAtor > -1) {
      yAtor-=3;
    }
    event.preventDefault();
  },
  true
  );

function verificarColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if(xAtor > xCarros[i] && xAtor < (xCarros[i] + widthCarro)) {
        if ((yAtor > yCarros[i] && yAtor < (yCarros[i] + heightCarro)) || 
        ((yAtor + tamanhoAtor) > yCarros[i] && (yAtor + tamanhoAtor) < (yCarros[i] + heightCarro))) {
          
          voltarAtorPosicaoInicial();
          pontosMaiorQueZero();
          somColisao.play();
          
        }
    }
  }
}
      
function voltarAtorPosicaoInicial() {
  yAtor = 366;
}

function incluirPontos() {
  pincel.fillStyle ='yellow';
  pincel.textAlign = 'center';
  pincel.font='25px Arial';
  pincel.fillText(meusPontos, 500 / 5 , 25);
}

function marcarPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltarAtorPosicaoInicial();
    somPonto.play();
  }
}

function pontosMaiorQueZero() {
  if (meusPontos > 0) {
    meusPontos -= 1;
  }
}