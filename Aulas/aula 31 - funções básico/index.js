function saudacao(nome) { //* nome é um parâmetro
    return `Bom dia ${nome}!`; //* Retorna a string com o nome

    // console.log('Não será exibido!'); //* Erro! Código após o return não será executado
}

const variavel = saudacao('Luiz'); //* Variavel recebe o retorno da função saudacao
console.log(variavel); // Bom dia Luiz! //* Exibe o retorno da função

function soma(x, y) {
    const resultado = x + y; //* Soma os valores de x e y
    return resultado; //* Retorna o resultado
}

console.log(soma(2, 2)); // 4 //* Exibe o resultado da função
console.log(soma(3, 1)); // 4 //* Exibe o resultado da função
console.log(soma(5, 10)); // 15 //* Exibe o resultado da função

// console.log(resultado); //* Erro! resultado não está definido fora da função, pois é uma variável local no escopo da função
// console.log(soma(5)); //* NaN! Se não passar o segundo valor, o segundo valor será undefined, e undefined + 5 = NaN

// function soma(x = 1, y = 1) { //* Se não passar o valor de x ou y, o valor padrão será 1

const raiz = function (n) {
    return n ** 0.5; //* Retorna a raiz quadrada do número
}

console.log(raiz(9)); // 3 //* Exibe a raiz quadrada do número 9
console.log(raiz(16)); // 4 //* Exibe a raiz quadrada do número 16
console.log(raiz(25)); // 5 //* Exibe a raiz quadrada do número 25

// const raiz = n => {
//  n ** 0.5;
//} //* Arrow function

// const raiz = n => n ** 0.5; //* Arrow function simplificada
