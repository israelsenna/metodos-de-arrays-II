const arquivos = ['foto.jpeg', 'video.gif', 'morcego.bat', 'gato.jpg'];

const verificaBat = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeBat = arquivo.indexOf('.bat'); //  retorna o indice q contem o .bat
        return existeBat !== -1;
        //caso indexOf nao retorne um indice existeBat sera -1, se for diferente de -1 existeBat sera um TRUE
    });

    if (resultado) {
        console.log("Virus detectado");
    } else {
        console.log("nenhum virus detectado");
    }
}

verificaBat(arquivos);