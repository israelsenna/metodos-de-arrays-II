//executa a cada tempo estipulado no codigo infinitamente...

// const imprimir = () => {
//     console.log('Cubos Academy')
//     clearInterval(interval)
// }

// const interval = setInterval(imprimir, 2000)

let numero = 10;

const contador = setInterval(function () {
    console.log(numero);
    numero--;
    if (numero === 0) {
        console.log("Booooommmm!");
        clearInterval(contador);
    }
}, 1000);

//clearInterval() serve para parar o contador 