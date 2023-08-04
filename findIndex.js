// findIndex() funciona como o find(), porem retornando apenas o indice.

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const resultadoObjeto = usuarios.findIndex((usuario) => {
    return usuario.nome === 'rodrigo';
});

console.log(resultadoObjeto); // tras o indice do objeto

// ----------------------------------------------------------------------------

const nomes = ['joao', 'ana', 'jose'];

const resultadoArray = nomes.findIndex((nome) => {
    return nome === 'ana';
});

console.log(resultadoArray); // tras o indice do array de strings

// ----------------------------------------------------------------------------

const numeros = [1, 2, 3];

const resultadoNumero = numeros.findIndex((numero) => {
    return numero === 3;
});

console.log(resultadoNumero); // tras o indice do numero

