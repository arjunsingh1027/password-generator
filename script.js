// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate click event
generateEl.addEventListener('click', () => {
    const length = lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // loop length
    // add final pw to pw var and return
// initialize password variable
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
// filter unchecked
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if(typesCount === 0){
        return '';
    }   

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
           const funcName = Object.keys(type)[0];

           generatePassword += randomFunc[funcName]();
        });
    }

    const finalPassword = (generatePassword.slice(0, length));
    
    return finalPassword;
}

// Generator functions
// lowercase letters 97-122 on CharCode
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// uppercase letters from 65
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbol
function getRandomSymbol() {
    const symbols = '!@#$%^&*()<>?{}[]'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


