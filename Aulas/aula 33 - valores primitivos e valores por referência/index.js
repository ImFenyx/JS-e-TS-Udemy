/**
 * Primitivos (imutávies) - string, number, boolean, undefined, null (bigint, symbol)
 * valores copiados
 * 
 * Referência (mutável) - array, object, function
 * passados por referência, equivalente ao $ do PHP e ao & do C
 */

//          0123
let nome = "Luiz";
nome = "Otávio"; //? Não altera o valor da variável, ele cria um novo espaço na memória
console.log(nome);
nome[0] = "R"; //? Não altera o valor da variável, ele cria um novo espaço na memória

let a = "A";
let b = a; // Cópia
console.log(a, b); // A A

a = "Outra coisa";
console.log(a, b); // Outra coisa A

// Referência
let c = [1, 2, 3];
let d = c; //? Aponta para o mesmo espaço na memória
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

d.push("Luiz");
let e = c
console.log(c, d, e);

let f = [...c]; //? Cópia
f.push(5);
console.log(c, d, e, f);

const pessoaA = {
    name: "Luiz",
    surname: "Otávio"
}

const pessoaB = pessoaA;
console.log(pessoaA, pessoaB);

pessoaA.name = "João";
console.log(pessoaA, pessoaB);

const pessoaC = {...pessoaA};
pessoaC.name = "Jean";
console.log(pessoaA, pessoaC);
