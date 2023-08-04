//retorna um novo array com os parametros passados na condicao

const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Leo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
];

const professoresBackend = professores.filter((professores) => {
    return professores.stack === 'backend';

});

console.log(professoresBackend);

const professoresFrontend = professores.filter((professores) => {
    return professores.stack === 'frontend';
});

console.log(professoresFrontend);