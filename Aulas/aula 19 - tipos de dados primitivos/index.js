// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; //* string
const nome1 = "Luiz"; //* string
const nome2 = `Luiz`; //* string
const num1 = 10; //* number
const num2 = 10.52; //* number
let nomeAluno; //? undefined -> não aponta para local nenhum na memória (valor nulo)
let sobrenomeAluno = null; //? Nulo -> tbm não aponta para local nenhum na memória, a diferença entre eles, é que null é usada de forma proposital pelo dev e undefined é usada para variáveis que não foram inicializadas.
const boolean = true; //? Boolean = true (Verdadeiro), false (Falso) -> valores lógicos. Ex:
//* const aprovado = true;

console.log(typeof nome, nome); //? checar tipos de dados, primeiro argumento é o tipo de dado e o segundo é o valor.

console.log(typeof sobrenomeAluno, sobrenomeAluno); // object null -> é um objeto nulo.

let a = 2;
const b = a;
console.log(a, b); // 2 2

a = 3
console.log(a, b); // 3 2
