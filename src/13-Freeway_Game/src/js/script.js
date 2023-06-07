var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function draw() {
  limparTela();
  exibirImagem(imgAtor, imagemAtor, xAtor, yAtor, tamanhoAtor, tamanhoAtor);
  exibirCarros();
  movimentarCarro();
  voltarPosicaoInicial();
  verificarColisao();

  incluirPontos();
  marcarPonto();

  somTrilha.play();
  somTrilha.loop = true;
}
setInterval(draw, 10);

function limparTela() {
  exibirImagem(imgEstrada, imagemEstrada, 0, 0, 500, 400);
}

    