// const usuarios = [
//     {
//         nome: "Israel",
//         idade: 21
//     },
//     {
//         nome: "Pedro",
//         idade: 16
//     },
//     {
//         nome: "Paula",
//         idade: 19
//     },
// ];

// const validaIdadeUsuario = () => {
//     let verificaIdadeMenor = 0;

//     for (const usuario of usuarios) {
//         if (usuario.idade < 18) {
//             verificaIdadeMenor += 1;
//         }
//     }

//     if (verificaIdadeMenor === 0) {
//         console.log("Festa liberada!");
//     } else {
//         console.log("Possui menor de idade");
//     }
// }

// validaIdadeUsuario();

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 15 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 19 },
];

const fiscalizarFesta = (arrayUsuarios) => {

    const resultado = arrayUsuarios.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log("Festa liberada!");
    } else {
        console.log("Possui menor de idade");
    }
}

fiscalizarFesta(usuarios);