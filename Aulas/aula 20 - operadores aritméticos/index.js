/**
 ** Aritméticos
 *? + Adição / Concatenação
 *? - / * 
 *? ** Potenciação
 *? % Resto da divisão
 */ 

 /**
  ** Ordem de precedência
  *? ()
  *? **
  *? * / %
  *? + -
  */ 

// Adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // 15

// Concatenação
const num3 = '5';
const num4 = 10;
console.log(num3 + num4); // 510

// Subtração
console.log(num1 - num2); // -5

// Multiplicação
console.log(num1 * num2); // 50

// Divisão
console.log(num1 / num2); // 0.5

// Potenciação
console.log(num1 ** num2); // 9765625

// Resto da divisão
console.log(num1 % num2); // 5

// Incremento
let contador = 1;
contador++; // 2
console.log(contador); // Isso vai incrementar o valor da variável contador em 1

// Decremento
contador--; // 1
console.log(contador); // Isso vai decrementar o valor da variável contador em 1

// Atribuição
contador += 2; // 3 (contador = contador + 2)
let contador2 = 1;
contador2 -= 2; // -1 (contador2 = contador2 - 2)
let contador3 = 1;
contador3 *= 2; // 2 (contador3 = contador3 * 2)
let contador4 = 1;
contador4 /= 2; // 0.5 (contador4 = contador4 / 2)
let contador5 = 1;
contador5 **= 2; // 1 (contador5 = contador5 ** 2)
let contador6 = 1;
contador6 %= 2; // 1 (contador6 = contador6 % 2)

// NaN - Not a Number
const num_1 = 10;
const num_2 = 'Luiz';
console.log(num_1 * num_2); // NaN 

// parseInt - Transforma a string em número inteiro
const num_3 = 10;
const num_4 = parseInt('5');
console.log(num_3 + num_4); // 15
console.log(typeof num_4); // number

// parseFloat - Transforma a string em número decimal
const num_5 = 10;
const num_6 = parseFloat('5.2');
console.log(num_5 + num_6); // 15.2
console.log(typeof num_6); // number

