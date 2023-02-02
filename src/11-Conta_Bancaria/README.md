## Conta bancária
-----------------

Exercício do curso "Orientação a Objetos" ministrado pela Stephany Nusch na plataforma da DIO, utilizando JavaScript.

Aplicar os conceitos de orientação a objetos ao simular a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.
- Crie a classe `ContaBancaria` e dentro dela:
    - crie os parâmetros `agencia`, `numero`, `tipo` e `saldo`.
    - construa o getter e o setter do `saldo`.
    - crie os métodos `sacar` e `depositar`.
- Crie uma classe-filha `ContaCorrente`:
    - que herda todos os parâmetros e possui o parâmetro `cartaoCredito`.
    - construa o getter e setter de `cartaoCredito`.
    - Faça com que o `tipo` seja 'conta corrente' por padrão.
- Crie uma classe-filha `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`.
- Crie uma classe-filha `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`.
    - Faça com que o método `saque` de `contaUniversitaria` apenas seja capaz de sacar valores menores que 500 reais.