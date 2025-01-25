//*              0       1        2
const alunos = ['Luiz', 'Maria', 'João']; // Array
console.log(alunos); // [ 'Luiz', 'Maria', 'João' ]

// Alterando e adicionando valores no array
alunos[0] = 'Eduardo'; //* Alterando o valor do índice 0
alunos[3] = 'Luiza'; //* Adicionando um novo valor no índice 3
console.log(alunos); // [ 'Eduardo', 'Maria', 'João', 'Luiza' ]

// Adicionando valores no array com push e unshift
alunos.push('Fabia'); //* Adiciona um novo valor no final do array
alunos.push('Otávio'); //* Adiciona um novo valor no final do array
console.log(alunos); // [ 'Luiz', 'Maria', 'João', 'Luiza', 'Fabia' 'Otávio' ]

alunos.unshift('Fabiano'); //* Adiciona um novo valor no início do array
console.log(alunos); // [ 'Fabiano', 'Luiz', 'Maria', 'João', 'Luiza', 'Fabia' 'Otávio' ]

// Removendo valores do array com pop e shift
const removido = alunos.pop(); //* Remove o último valor do array e retorna o valor removido
console.log(removido); // Otávio
console.log(alunos); // [ 'Fabiano', 'Luiz', 'Maria', 'João', 'Luiza', 'Fabia' ]

const remove = alunos.shift(); //* Remove o primeiro valor do array e retorna o valor removido
console.log(remove); // Fabiano
console.log(alunos); // [ 'Luiz', 'Maria', 'João', 'Luiza', 'Fabia' ]

// Deletando valores do array com delete
// delete alunos[1]; //* Deleta o valor do índice 1
// console.log(alunos); // [ 'Luiz', <1 empty item>, 'João', 'Luiza', 'Fabia' ]


console.log(alunos.slice(0, 3)); // [ 'Luiz', 'Maria', 'João' ] //* Pega os valores do índice 0 ao 3

// Acessar elementos específicos de um array
console.log(alunos[0]); // Luiz
console.log(alunos[1]); // Maria
console.log(alunos[2]); // João

console.log(typeof alunos); // object //* Array é um objeto
console.log(alunos instanceof Array); // true //* Verifica se é um array




