//Atividade 2

const pessoa = {
    nome: "João",
    idade: 15
}
const pessoa1 = {
    nome: "Matheus",
    idade: 3
}
const pessoa2 = {
    nome: "Laura",
    idade: 41
}

const pessoa3 = {
    nome: "Matilda",
    idade: 68
}

function calcularIdade(anos) {
    return console.log(`Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`);
}


calcularIdade.call(pessoa, 27);
calcularIdade.call(pessoa1, 27);
calcularIdade.call(pessoa2, 27);
calcularIdade.call(pessoa3, 27);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

calcularIdade.apply(pessoa, [14]);
calcularIdade.apply(pessoa1, [14]);
calcularIdade.apply(pessoa2, [14]);
calcularIdade.apply(pessoa3, [14]);