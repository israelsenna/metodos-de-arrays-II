// retorna o primeiro elemento do array correspondente a condicao implementada funcao callback
const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.find((elementoAtual) => {
    return elementoAtual > 3;
});

console.log(resultado);