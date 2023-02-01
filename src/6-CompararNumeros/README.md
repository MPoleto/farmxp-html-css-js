## Operadores
-------------
Atividade prática do curso "Sintaxe e Operadores" ministrado pela Stephany Nusch no site da DIO.

Linguagem JavaScript.

### Atividade:

- Criar uma função que recebe dois números como parâmetros.
- Conferir se os números são iguais.
- Conferir se a soma dos números é maior que 10 ou menor que 20.
- Retornar uma string dizendo:
    - "Os números `num1`e `num2` não/sãi iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20."

#### Diferenciais:
- Além de fazer o que foi proposto na atividade, coloquei uma condição a mais para caso a soma fosse `igual` a 10 ou 20. Pois só a condição `maior/menor` não abrangia a possibilidade de a soma ser igual a 10 ou 20, ou seja, a função retornava a string dizendo que a soma era `maior que` quando na verdade era `igual a`.
- Adicionei `try catch` para tratar os erros caso os parâmetros:
    - Não sejam adicionados.
    - Sejam trings vazias.
    - Não sejam números.