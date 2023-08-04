// const imprimirNome = (nome) => {
//     console.log(nome);
// }

// imprimirNome('Guido');

const imprimirGuido = () => {
    console.log('Guido Cerqueira');
}

setTimeout(imprimirGuido, 1000);

// setTimeout(() => {
//     console.log('Cubos Academy')
// }, 5000)

setTimeout(function () {
    console.log('Cubos Academy')
}, 5000)

// executa só uma vez 