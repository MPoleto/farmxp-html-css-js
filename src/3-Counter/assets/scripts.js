//Contador 1
document.getElementById('subtract').addEventListener("click",decrement);
document.getElementById('sum').addEventListener("click",increment);

let firstCounter = document.getElementById('current-number');
let currentNumber = 0;

function decrement() {
    currentNumber = currentNumber - 1;
    firstCounter.innerHTML = currentNumber;
}

function increment() {
    currentNumber = currentNumber + 1;
    firstCounter.innerHTML = currentNumber;
}


//Contador 2
let restrictedCounter = document.getElementById('restricted-number');
let restrictedNumber = 0;

function decrease() {
    if (restrictedNumber > 0)
    {
    restrictedNumber = restrictedNumber - 1;
    restrictedCounter.innerHTML = restrictedNumber;
    }
}

function increase() {
    if (restrictedNumber < 10)
    {
    restrictedNumber = restrictedNumber + 1;
    restrictedCounter.innerHTML = restrictedNumber;
    }
}


//Contador 3
let colorCounter = document.getElementById('color-number');
let colorNumber = 0;

function less() {
    colorNumber = colorNumber - 1;
    colorCounter.innerHTML = colorNumber;
    changeColor();
}

function more() {
    colorNumber = colorNumber + 1;
    colorCounter.innerHTML = colorNumber;  
    changeColor();
}

function changeColor () {
    if(colorCounter.innerHTML < 0 ) {
       return colorCounter.style.color = '#ff6347'; //tomato
    }
    else {
       return colorCounter.style.color = '#009cb8'; //azul
    }
}