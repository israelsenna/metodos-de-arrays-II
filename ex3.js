const carros = [
    { nome: 'corolla', marca: 'toyota', anos: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', anos: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', anos: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', anos: '2018', cor: 'branco' },
];

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
    console.log(resultado);
};

buscarCarro('toyota', carros);
// O FIND vai retornar o primeiro elemento do array correspondente a condicao
// Logo ira retornar apenas o Corolla Toyota
// A Hilux que tbm tem marca Toyota nao ira retornar