//*              01234567
let umaString = `Um texto`; //? Strings são indexadas/iteráveis

console.log(umaString[4]); // e //* Retorna o caractere na posição/índice 4
// console.log(umaString[8]); // undefined

console.log(umaString.charAt(6)); // t //* Retorna o caractere na posição/índice 6

console.log(umaString.indexOf('texto')); // 3 //* Retorna o índice da primeira letra da string especificada

console.log(umaString.indexOf("Texto")); // -1 //* Retorna -1 se não encontrar a string especificada
console.log(umaString.lastIndexOf('m')); // 5 //* Retorna o índice da última letra da string especificada

console.log(umaString.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ] //* Retorna um array com todas as letras minúsculas da string

console.log(umaString.search(/x/)); // 5 //* Retorna o índice da primeira letra da string especificada, mas ele aceita expressões regulares

console.log(umaString.replace('Um', 'Outro')); // Outro texto //* Substitui a primeira string pela segunda

console.log(umaString.length); // 8 //* Retorna o tamanho da string

console.log(umaString.slice(3, 8)); // texto //* Retorna a string entre os índices 3 e 8, sempre termine com o índice desejado + 1

console.log(umaString.slice(-4)); // -4 seria o length - 4, retornando 'exto'

console.log(umaString.split(' ')); // [ 'Um', 'texto' ] //* Divide a string em um array, separando pelo caractere especificado (espaço)

console.log(umaString.toUpperCase()); // UM TEXTO //* Transforma a string em maiúscula

console.log(umaString.toLowerCase()); // um texto //* Transforma a string em minúscula
