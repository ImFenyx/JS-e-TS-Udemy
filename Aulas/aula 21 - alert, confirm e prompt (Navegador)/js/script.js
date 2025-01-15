alert("Olá, mundo!"); //* Não existe no Node.js, apenas no navegador.
// window.alert("Olá, mundo!"); //? Existe um objeto chamado window que é o objeto global do navegador, e ele possui um método chamado alert, assim como o console é um objeto global que possui um método chamado log.

console.log("Alguma coisa"); //* Existe tanto no Node.js quanto no navegador.

//? Digite "window" no console do navegador para ver todos os métodos e propriedades que ele possui. Todos esses métodos e propriedades são do objeto window, podendo usá-lo a seu favor. Exemplo: window.alert("Olá, mundo!");.

window.confirm("Deseja realmente sair dessa página?"); //* Retorna um booleano caso seja declarado como uma variável.

window.prompt("Qual o seu nome?"); //* Retorna o valor digitado pelo usuário caso seja declarado como uma variável.

//? alert retorna undefined, confirm retorna um booleano e prompt retorna uma string.

const confirmar = window.confirm("Deseja realmente sair dessa página?");
console.log(confirmar); //* Retorna true ou false.

let num1 = Number(window.prompt("Digite um número:"));
let num2 = Number(window.prompt("Digite outro número:"));

console.log(num1 + num2); // Retorna a soma dos números digitados pelo usuário. Com number() é possível converter a string retornada pelo prompt em um número.

