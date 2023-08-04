const nomes = ['joao', 'maria', 'jose', 'rodrigo'];
const numeros = [2, 5, 9,];

// DESTA FORMA
// const minhaFuncaoCallback = (nome) => {
//     return nome === 'joao';
// }
// const resultado = nomes.some(minhaFuncaoCallback);

// OU DESTA 
// const resultado = nomes.some((nome) => {
//     return nome === 'joao';
// });

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado);