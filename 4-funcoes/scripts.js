// Definindo uma funcao

// Funcao nomeada
function escreverNoCosole() {
    console.log("Olá, mundo!");
}

// Funcao anonima
const textoNoConsole = function(texto) {
    console.log(texto);
}

console.log(typeof textoNoConsole);

const enviarParaConsole = textoNoConsole;

escreverNoCosole();

textoNoConsole("Escrevendo texto passado por parametro");
enviarParaConsole("Escrevendo outro texto passado por parametro")