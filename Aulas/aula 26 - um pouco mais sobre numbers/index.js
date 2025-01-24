let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2); // 3.5
console.log(num1.toString() + num2); // 12.5 //* num1.toString() converte o número 1 em string apenas temporariamente nessa operação
console.log(typeof num1); // number
// num1 = num1.toString(); //* num1 agora é uma string
// console.log(typeof num1); //* string

// num1 = 10
// console.log(num1.toString(2)); // 1010 //* num1 em binário
// console.log(num1.toFixed(2)); // 10.00 //* num1 com 2 casas decimais, ainda não é uma string nem foi alterado, apenas formatado
// console.log(Number.isInteger(num1)); // true //* num1 é um número inteiro
// console.log(Number.isNaN(num1)); // false //* num1 não é um NaN

/**
 * Imprecisão de números decimais
 */ 

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; // 0.8

console.log(num3); // 0.7999999999999999 //* não é 0.8 devido a imprecisão de números decimais
console.log(num3.toFixed(2)); // 0.80 //* 0.8 com 2 casas decimais, mas ainda é uma string

num3 += num4; // 0.9
console.log(num3); // 0.8999999999999999 //* não é 0.9 devido a imprecisão de números decimais
num3 += num4; // 1.0

console.log(num3); // 0.9999999999999999 //* não é 1.0 devido a imprecisão de números decimais
console.log(Number.isInteger(num3)); // false //* num3 não é um número inteiro
num3 = Number(num3.toFixed(2)); //* num3 agora é um número com 2 casas decimais

console.log(Number.isInteger(num3)); // true //* num3 é um número inteiro

