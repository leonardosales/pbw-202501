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

// Funcoes com retorno
const soma = function(a, b) {
    return a + b;
}
console.log(soma(2,3));

const saudacao = function(nome) {
    if (nome === "Matheus") {
        return "Olá, Matheus";
    }
    return "Oi, " + nome;
}
console.log(saudacao("Mateus"));