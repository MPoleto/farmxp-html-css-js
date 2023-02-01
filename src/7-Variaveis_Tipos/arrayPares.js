function changeEven (array) {
        if(!array) return console.log ('Valores inválidos');
        if(!array.length) return console.log(-1);

    for(i = 0; i < array.length; i++) {

        if((array[i] % 2 == 0) && (array[i] != 0)) {
            console.log(`${array[i]} substitui por 0`);
            array[i] = 0;
            
        }
    }
    console.log(array);
}

const test = [3, 6, 14, 22, 89, 56, 0, 8, 41];
changeEven(test);
