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

// Escopo de funcoes

let n = 10;
const numero = function() {
    let n = 5;
    console.log(n);
    n++;
}
numero();
console.log(n);

let x = 10;

if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

// Escopos aninhados

let y = 5;

const multiplicar = function(n) {
    let y = n * 2;
    console.log(y);
    if (y === 10) {
        console.log(y);
    }
}
multiplicar(y);
console.log(y);

// Arrow Functions

const parOuImpar = (n) => {
    return n % 2;
};

console.log(parOuImpar(4));

const quadradoNumero = (n) => {
    return n * n;
};

const quadradoNumero2 = n => n * n;

console.log(quadradoNumero(2));
console.log(quadradoNumero2(10));

const nomeComIdade = function(nome, idade) {
    if (nome == undefined) {
        nome = "Anonimo";
    }
    if (idade === undefined) {
        console.log("Seu nome é " + nome);
    } else {
        console.log("Seu nome é " + nome + " e voce tem " + idade + " anos");
    }
}
nomeComIdade();
nomeComIdade("Leonardo");
nomeComIdade("Leonardo", 40);

function repetirTexto(texto, n = 2) {
    for(let i = 0; i < n; i++) {
        console.log(texto + " " + i);
    }
}

repetirTexto("Testando", 5);
repetirTexto("Só duas vezes");

// Closures

function armazenarSoma(x) {
    return y => x + y;
}

const soma1 = armazenarSoma(5);
const soma2 = armazenarSoma(10);

console.log(soma1(10));
console.log(soma2(5));