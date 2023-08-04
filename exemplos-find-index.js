const carros = [
    { nome: 'corolla', marca: 'toyota', anos: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', anos: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', anos: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', anos: '2018', cor: 'branco' },
];

const resultadoCarros = carros.findIndex((carro) => {
    return carro.nome === 'ranger';
})

console.log(resultadoCarros);

//----------------------------------------------------------------------

const nomes = ['joao', 'ana', 'rodrigo'];

const resultadoNomes = nomes.findIndex((nome) => {
    return nome === 'ana';
})

console.log(resultadoNomes);

//----------------------------------------------------------------------

const numeros = [1, 2, 3, 4];

const resultadoNumeros = numeros.findIndex((numero) => {
    return numero === 3;
})

console.log(resultadoNumeros);
