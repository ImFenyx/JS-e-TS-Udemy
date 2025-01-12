/**
 Luiz Otávio Miranda tem 30 anos, pesa 84 kg e seu IMC é de 25.925925925925924
 Luiz Otávio nasceu em 1980
 */

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC é de', imc, nome, 'nasceu em', anoNascimento);

// Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`);
