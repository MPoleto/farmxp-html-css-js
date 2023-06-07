# Operadores

Atividade prática do curso *Sintaxe e Operadores* ministrado pela Stephany Nusch no site da DIO.

> URL: [Compare Numbers](https://mpoleto.github.io/farmxp-html-css-js/src/07-CompareNumbers/index.html)

## Atividade:

- Criar uma função que recebe dois números como parâmetros.
- Conferir se os números são iguais.
- Conferir se a soma dos números é maior que 10 ou menor que 20.
- Retornar uma string dizendo:
    - "Os números `num1`e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20."

## Diferenciais:

- Além de fazer o que foi proposto na atividade, coloquei uma condição a mais para caso a soma fosse `igual` a 10 ou 20. Pois só a condição `maior/menor` não abrangia a possibilidade de a soma ser igual a 10 ou 20, ou seja, a função retornava a string dizendo que a soma era `maior que` quando na verdade era `igual a`.
- Adicionei o bloco `try catch` e a declaração `throw` para tratar os erros caso os parâmetros:
    - Não sejam adicionados.
    - Sejam trings vazias.
    - Não sejam números.

- Criei um segundo arquivo com a mesma atividade proposta, mas adaptada para que os números sejam fornecidos por meio de inputs em uma página HTML.
    - Para essa versão retirei o bloco `try catch` e a declaração `throw`, pois ao definir o `input` como `type=number` o botão não aciona o método `addEventListener` se não for um número.
    - Adicionei o método `.toLocaleString()` nas variáveis numéricas para que, se os inputs forem números decimais, o resultado seja exibido no formato de configuração do sistema.