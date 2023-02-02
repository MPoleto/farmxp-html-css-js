## Variáveis e tipos
---------------------
Exercício proposto no curso "Variáveis e tipos" ministrado pela Stephany Nusch no site da DIO.  
Linguagem JavaScript.  
<br />

### *Exercício 1*
Verificar, de duas maneiras diferentes, se uma string é um palíndromo (*frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa*).

<br />

> Nas duas funções antes de verificar se a string é um palíndromo manipulei a string para remover espaços em branco e deixar todas as letras minúsculas para que não afetasse o resultado do teste.  
>
> Na primeira função usei os métodos `split(), reverse() e join()` para inverter e depois verificar se a string era um palíndromo.  
>
>Na segunda função fiz um `loop for`, que executou o laço de forma decrescente e armazenou os caracteres em uma nova variável. Para poder comparar com a string e verificar se era um palíndromo.  

<br />

### *Exercício 2* 
Trocar todos os números pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

<br />

> Nesse exercício fiz uma função com um `loop for` para que fizesse a interação da array, dentro do loop coloquei uma condição `if` para que se o número fosse par e não fosse 0, fosse substituido por 0. 