setTimeout(calculator, 500);

function calculator() {
  const operation = Number(prompt
    ('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão real\n 5 - Divisão inteira\n 6 - Potenciação\n 7 - Sair'));

  if (operation == 7 || operation == 0) {
    alert('Até mais!');

  } else if (operation == "" || operation >= 8) {
    alert('Erro - operação inválida!');
    calculator();

  } else {
    const firstNumber = Number(prompt('Insira o primeiro valor:'));
    const secondNumber = Number(prompt('Insira o segundo valor:'));

    if (!firstNumber || !secondNumber) {
      alert('Erro - entrada inválida!');
      calculator();
    } 

    switch (operation) {
      case 1:
        sum(firstNumber, secondNumber);
        break;
      case 2:
        subtraction(firstNumber, secondNumber);
        break;
      case 3:
        multiplication(firstNumber, secondNumber);
        break;
      case 4:
        division(firstNumber, secondNumber);
        break;
      case 5:
        modulus(firstNumber, secondNumber);
        break;
      case 6:
        exponentiation(firstNumber, secondNumber);
        break;
    }
    newOperation();
  }
}


  function sum(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`);
  }

  function subtraction(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`);
  }

  function multiplication(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`);
  }

  function division(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`);
  }

  function modulus(firstNumber, secondNumber) {
    const result = firstNumber % secondNumber;
    alert(`O resto da divisão entre ${firstNumber} e ${secondNumber} é igual a ${result}`);
  }

  function exponentiation(firstNumber, secondNumber) {
    const result = firstNumber ** secondNumber;
    alert(`${firstNumber} elevado a ${secondNumber} é igual a ${result}`);
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