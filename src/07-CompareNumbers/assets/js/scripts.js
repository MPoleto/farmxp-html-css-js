const form = document.getElementById('form');
const one = document.getElementById('number-one');
const two = document.getElementById('number-two');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const number1 = Number(one.value);
    const number2 = Number(two.value);

    exerciseOperators(number1, number2);

    one.value = '';
    two.value = '';
  });

function exerciseOperators(number1, number2) {
    const firstpart = areEquals(number1, number2);
    const secondpart = compareSum(number1, number2);
    
    result.innerHTML = firstpart + secondpart;      
}

function areEquals (number1, number2) {
    let distinct;
    
    if (number1 !== number2) {
        distinct = 'não';
    } else {
        distinct = '';
    }
    return `Os números ${number1.toLocaleString()} e ${number2.toLocaleString()} ${distinct} são iguais. `;
}

function compareSum (number1, number2) {
    const result = number1 + number2;
    let compare10 = 'igual a';
    let compare20 = 'menor que';

    if (result < 10) { compare10 = 'menor que'; }
    
    if (result > 10) {
        compare10 = 'maior que';

        if (result < 20) { compare20 = 'menor que'; } 
        else if (result > 20) { compare20 = 'maior que'; } 
        else if (result === 20) { compare20 = 'igual a'; }

    }
    return `Sua soma é ${result.toLocaleString()}, que é ${compare10} 10 e ${compare20} 20.`;    
}

