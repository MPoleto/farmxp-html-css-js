function exerciseOperators (number1, number2) {
    try{
        if((number1 == null) || (number2 == null)) throw 'vazio. Adicione o(s) número(s).';
        if((number1 === '') || (number2 === '')) throw 'vazio. Forneça o(s) número(s).';
        if(isNaN(number1) || isNaN(number2)) throw 'não é número.';
        
        number1 = Number(number1);
        number2 = Number(number2);

        const firstpart = areEquals(number1, number2);
        const secondpart = compareSum(number1, number2);
    
        return firstpart + secondpart;
    }
    catch (err){
        return `Input ${err}`;
    }
}

function areEquals (number1, number2) {
    let distinct;
    
    if (number1 !== number2) {
        distinct = 'não';
    } else {
        distinct = '';
    }
    return`Os números ${number1} e ${number2} ${distinct} são iguais. `;
}

function compareSum (number1, number2) {
    const result = number1 + number2;
    let compare10 = 'igual a';
    let compare20 = 'menor que';

    if (result < 10) { compare10 = 'menor que'; }
    
    if (result > 10) {
        compare10 = 'maior que';

        if (result < 20) { compare20 = 'menor que'; } 
        if (result > 20) { compare20 = 'maior que'; } 
        if (result === 20) { compare20 = 'igual a'; }

    }
    return `Sua soma é ${result}, que é ${compare10} 10 e ${compare20} 20.`;    
}

console.log (' 1 - ' + exerciseOperators());
console.log (' 2 - ' + exerciseOperators('',''));
console.log (' 3 - ' + exerciseOperators('oito', 'um'));
console.log (' 4 - ' + exerciseOperators(7,));
console.log (' 5 - ' + exerciseOperators('', 9));
console.log (' 6 - ' + exerciseOperators('8', '2'));
console.log (' 7 - ' + exerciseOperators(5, '15'));
console.log (' 8 - ' + exerciseOperators(20, 2));
console.log (' 9 - ' + exerciseOperators('0', 9));
console.log ('10 - ' + exerciseOperators(0, '16'));
console.log ('11 - ' + exerciseOperators(8, '8'));
console.log ('12 - ' + exerciseOperators(11, 11));
