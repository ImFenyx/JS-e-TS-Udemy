// const pessoa1 = { // Objeto //? Objeto é uma coleção de chaves e valores
//     nome: 'Lucas',
//     sobrenome: 'Santos',
//     idade: 25
// };

// const pessoa2 = { // Objeto //* Esse é o método mais comum de se criar um objeto, usando variáveis
//     nome: 'Maria', 
//     sobrenome: 'Oliveira', 
//     idade: 25
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);

function criaPessoa(nome, sobrenome, idade) { //* Factory function, função que cria um objeto
    return { 
        nome,
        sobrenome,
        idade
     };
}

const pessoa1 = criaPessoa('Lucas', 'Santos', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);
console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa3.nome, pessoa3.sobrenome, pessoa3.idade);
console.log(pessoa4.nome, pessoa4.sobrenome, pessoa4.idade);
console.log(pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);


//Exemplo de objeto

const cachorro = {
    nome: "Jake",
    idade: 7,
    latir() { // Método
        console.log(`${this.nome} está latindo! ("Au Au"), ${this.nome} tem ${this.idade} anos de idade.`);
    },

    incrementarIdade() { // Método
        this.idade++;
        console.log(`${this.nome} está latindo de novo! ("Au Au Au"), ${this.nome} disse que agora tem ${this.idade} anos de idade.`);
    }
}

cachorro.latir(); // Chamando o método
cachorro.incrementarIdade(); // Chamando o método

