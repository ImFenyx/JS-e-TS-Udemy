// Faça que varA tenha valor de varB, varB tenha valor de varC e varC tenha valor de varA, dando resultado de A B C para B C A respectivamente.

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

// [varA, varB, varC] = [varB, varC, varA]; //? Método mais simples mas não foi ensinado ainda

console.log(varA, varB, varC); // B C A
