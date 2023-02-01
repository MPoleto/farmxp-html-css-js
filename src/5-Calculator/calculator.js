function calculator() {
  const operation = Number(prompt
    ('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão real\n 5 - Divisão inteira\n 6 - Potenciação\n 7 - Sair'));

  if (!operation || operation >= 8) {
    alert('Erro - operação inválida!');
    calculator();
  } else if (operation == 7) {
    alert('Até mais');
  } else {
    let firstNumber = Number(prompt('Insira o primeiro valor:'));
    let secondNumber = Number(prompt('Insira o segundo valor:'));
    let result;
    if (!firstNumber || !secondNumber) {
      alert('Erro - entrada inválida!');
      calculator();
    } else{
      function sum() {
        result = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${result}`);
        newOperation();
      }

      function subtraction() {
        result = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${result}`);
        newOperation();
      }

      function multiplication() {
        result = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${result}`);
        newOperation();
      }

      function division() {
        result = firstNumber / secondNumber;
        alert(`${firstNumber} / ${secondNumber} = ${result}`);
        newOperation();
      }

      function modulus() {
        result = firstNumber % secondNumber;
        alert(`O resto da divisão entre ${firstNumber} e ${secondNumber} é igual a ${result}`);
        newOperation();
      }

      function exponentiation() {
        result = firstNumber ** secondNumber;
        alert(`${firstNumber} elevado a ${secondNumber} é igual a ${result}`);
        newOperation();
      }

      function newOperation() {
        let option = prompt('Deseja fazer uma operação?\n 1 - Sim\n 2 - Não');

        if (option == 1) {
          calculator();
        } else if (option == 2) {
          alert('Até mais!');
        } else {
          alert ('Digite uma opção válida!');
          newOperation();
        }
      }
    }

    switch (operation) {
      case 1:
        sum();
        break;
      case 2:
        subtraction();
        break;
      case 3:
        multiplication();
        break;
      case 4:
        division();
        break;
      case 5:
        modulus();
        break;
      case 6:
        exponentiation();
        break;
    }
  }
}

calculator();