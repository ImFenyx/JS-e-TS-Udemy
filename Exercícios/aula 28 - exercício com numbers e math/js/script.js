let num1 = Number(window.prompt('Digite um número: '));

document.body.innerHTML += `<h1>Seu número é ${num1}</h1>`;
document.body.innerHTML += `<h1>Raiz quadrada de ${num1} é ${Math.sqrt(num1)}</h1>`;
document.body.innerHTML += `<h1>${num1} é inteiro? ${Number.isInteger(num1)}</h1>`;
document.body.innerHTML += `<h1>${num1} é NaN? ${Number.isNaN(num1)}</h1>`;
document.body.innerHTML += `<h1>Arredondando para baixo: ${Math.floor(num1)}</h1>`;
document.body.innerHTML += `<h1>Arredondando para cima: ${Math.ceil(num1)}</h1>`;
document.body.innerHTML += `<h1>Com duas casas decimais: ${num1.toFixed(2)}</h1>`;
