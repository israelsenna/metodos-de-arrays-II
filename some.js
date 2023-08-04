// testa se pelo menos 1 dos elementos passam pela condicao e retorna true caso sim
const letras = ['a', 'b', 'c'];

const exibir = letras.some((elementoAtual) => {
    return elementoAtual === 'c';
});

console.log(exibir);