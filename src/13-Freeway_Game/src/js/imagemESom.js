let somTrilha = new Audio('./src/sound/trilha.mp3');
let somColisao = new Audio('./src/sound/colidiu.mp3');;
let somPonto = new Audio('./src/sound/pontos.wav');;

let imagemEstrada = './src/img/estrada.png';
let imagemAtor = './src/img/ator-1.png';
let imagemCarro = './src/img/carro-1.png';
let imagemCarro2 = './src/img/carro-2.png';
let imagemCarro3 = './src/img/carro-3.png';
let imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

var imgEstrada = new Image();
var imgAtor = new Image();
var imgCarro = new Image();
var imgCarro2 = new Image();
var imgCarro3 = new Image();
const imgCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro, imgCarro2, imgCarro3];

exibirImagem(imgEstrada, imagemEstrada, 0, 0, 500, 400);

function exibirImagem(nomeVar, enderecoImg, x, y, width, height) {
  pincel.drawImage(nomeVar, x, y, width, height);
  nomeVar.src = enderecoImg;
}