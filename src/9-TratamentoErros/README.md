## Validação de erros por tipo

Atividade prática do curso "Tratamento de Erros" ministrado pela Stephany Nusch na plataforma da DIO, utilizando JavaScript.

O objetivo é que a função receba um array e retorne-o caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Criar uma função que recebe um array e um número.
- Realizar as seguintes vaidações:
    - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
    - Se o array não for do tipo `object`, lance um erro do tipo `TypeError`
    - Se o número não for do tipo 'number', lance um erro do tipo `typeError`
    - Se o tamanho do array for diferente do número enviado como parâmentro, lance um erro do tipo `RangeError`
- Utilizar a declaração `try...catch`
- Filtrar as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`