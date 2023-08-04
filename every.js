// testa se todos os elementos passam pela condicao e retorna true caso sim

const frutas = ['abacaxi', 'manga', 'melancia'];
const resultadoFrutas = frutas.every((elementoAtual) => {
    return elementoAtual === 'manga';
});
console.log(resultadoFrutas); //false pois n tem manga em todos os indices

const frutas2 = ['manga', 'manga', 'manga'];
const resultadoFrutas2 = frutas2.every((elementoAtual) => {
    return elementoAtual === 'manga';
});
console.log(resultadoFrutas2);  //true pois tem manga em todos os indices



// testa se todos numeros sao menores q 4
const numeros = [1, 2, 3, 4];
const resultado = numeros.every((numero) => {
    return numero < 4;
});
console.log(resultado);
