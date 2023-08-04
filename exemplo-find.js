const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const resultadoObjeto = usuarios.find((usuario) => {
    return usuario.nome === 'ana';
});

console.log(resultadoObjeto); // tras todo objeto

// ----------------------------------------------------------------------------

const nomes = ['joao', 'ana', 'jose'];

const resultadoArray = nomes.find((nome) => {
    return nome === 'ana';
});

console.log(resultadoArray); // tras o array de strings

// ----------------------------------------------------------------------------

const numeros = [1, 2, 3];

const resultadoNumero = numeros.find((numero) => {
    return numero === 3;
});

console.log(resultadoNumero); // tras o numero

