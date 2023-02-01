//Atividade 1

const alunos = [{
    nome: 'Marcelo',
    nota: 9
},
{
    nome: 'Mirella',
    nota: 7
},
{
    nome: 'Joaquim',
    nota: 5.5
},
{
    nome: 'Diana',
    nota: 4.9
},
{
    nome: 'Rafael',
    nota: 9.8
},
{
    nome: 'Ana',
    nota: 8.3
}]

function alunosAprovados (array, media) {
    const aprovados = []; 

    for(i = 0; i < array.length; i++) {
        const {nome, nota} = array[i];

        if (nota >= media) aprovados.push(nome);
    }
    console.log(aprovados);
}

alunosAprovados(alunos, 6);
