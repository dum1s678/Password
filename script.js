function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lenght = +prompt("Длина вышего пароля:")
const isNumbers = confirm('Включать цифры ваш пароль?')
const isSpecsymbols = confirm('Включать спецсимволы в ваш пароль?')
let allowedSymbols = []
let finishPassword = ""

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-'];

lowercase.forEach(element => {
    allowedSymbols.push(element)
});
uppercase.forEach(element => {
    allowedSymbols.push(element)
});

if (isNumbers) {
    numbers.forEach(element => {
        allowedSymbols.push(element)
    });
}

if (isSpecsymbols) {
    symbols.forEach(element => {
        allowedSymbols.push(element)
    });
}

for (let i = 0; lenght > i; i++) {
    const randomInt = getRandomInt(0, allowedSymbols.length - 1)
    finishPassword += allowedSymbols[randomInt]
}

alert(`Ваш пароль: ${finishPassword}`)