//retorna um novo array com os parametros passados na condicao

const numeros = [1, 2, 3, 4, 5];

const exibir = numeros.filter((elementoAtual) => {
    return elementoAtual > 2;
});

console.log(exibir);