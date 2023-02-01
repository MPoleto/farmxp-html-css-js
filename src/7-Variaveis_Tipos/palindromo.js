function checkPalindrome (sentence) {
    if(!sentence) return console.log("Adicione um argumento válido");

    sentence = sentence.toLowerCase().replace(/\s/g, '');

    const verification = sentence.split('').reverse().join('');

    (sentence === verification) ? console.log('É um palíndromo') : console.log('Não é um palíndromo');
}


function checkPalindrome2 (sentence) {
    if(!sentence) return console.log("Adicione um argumento válido");

    sentence = sentence.toUpperCase().replace(/\s/g, '');
    
    let verification = ''; 

    for(i = (sentence.length-1); i >= 0; i--) {
        verification += sentence[i];
    }    
    (sentence === verification) ? console.log('É um palíndromo') : console.log('Não é um palíndromo');
}


checkPalindrome("Testando");
checkPalindrome("Acuda cadela da Leda caduca");

console.log('-------------------------------');

checkPalindrome2("Viva la vida");
checkPalindrome2("Anotaram a data da maratona");