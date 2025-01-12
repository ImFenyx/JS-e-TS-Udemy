/**
 //* Const é uma variável constante, ou seja, seu valor não pode ser alterado.
 */

/**
 //* Não podemos criar constantes com palavra reservadas
 //* Constantes precisam ter nomes significativos (objetivos, claros e coerentes)
 //* Não pode começar o nome de uma constante com um número
 //* Não pode conter espaços ou traços
 //* Utilizamos camelCase
 //* Case-sensitive
 //* Não podemos modificar o valor de uma constante
 //* NÃO UTILIZE VAR, UTILIZE CONST
*/

const nome = "João";
console.log(nome);

// + - * /
// String = Text | Number = Número
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);
console.log(typeof(primeiroNumero)); //typeof é uma função que retorna o tipo de dado, equivalente ao type() do python.
