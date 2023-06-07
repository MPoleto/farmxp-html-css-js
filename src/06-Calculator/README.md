# Calculadora

> URL: [Calculator](https://mpoleto.github.io/farmxp-html-css-js/src/06-Calculator/index.html)

Exercício do curso *Sintaxe básica em JavaScript* ministrado pela Diana Martine no site da DIO. No qual foi criado uma calculadora em javascript utilizando os seguintes métodos:  
<br />

- `prompt()` 
  - exibe uma caixa de diálogo com um campo de texto para o usuário responder;
- `Number()` 
  - o `prompt()` retorna oa resposta do usuário no formato de string, por isso, `Number()` é usado como função para converter o input em tipo numérico;
- `alert()` 
  - usado para exibir o resultado da operação realizada, a mensagem de erro (caso necessário) e uma mensagem quando encerrar o programa;
- `seTimeout()` 
  - a função `calculator()` é executada dentro de `seTimeout()` para que a animação da página seja carregada antes que o prompt seja exibido.

## CSS

Visto que a interface HTML em si não foi usada para a calculadora, apenas as janelas modais, usei isso como oportunidade para praticar animação com CSS, usei como base a animação feita por [Vaibhav Arora](https://codepen.io/vaibhavarora/pen/xmpxjp).

A animação foi criada a partir de 6 elementos com a tag `<div>` que foram sobrepostos em ordem decrescente usando as propriedades do CSS:
- de posicionamento `position: absolute`, `left` e `bottom`;
- `height` e `width` para definir o tamanho;
- `border-radius` para deixar os elementos arredondados;
- `opacity` para criar o efeito degradê nos elementos;
- `transform` com o método `scale()` para aumentar e diminuir os elementos durante a animação dentro de `@keyframes`.
