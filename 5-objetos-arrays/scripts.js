console.log("Objetos e Arrays")

// Definindo arrays

let numeros = [1, 2, 3, 4, 5, 6];
let nomes = ["Antonio", "Bruno", "Carlos"];
let bool = [true, false, false];

let misturado = [1, "Antonio", false, 2.0, Infinity, (a, b) => a + b]

console.log(typeof numeros);
console.log(numeros);
console.log(misturado);

// Acessando itens de um array
console.log(misturado[1]);
console.log(bool[2]);

// Acessando propriedades
console.log(nomes.length);
console.log(nomes['length']);

// Acessando metodos
console.log(typeof nomes[1].toUpperCase)
console.log(nomes[1].toUpperCase())
console.log(nomes[1].toLowerCase())
console.log(typeof misturado[5](20))
console.log(misturado[5](20, 21))

// Definindo um objeto

let pessoa = {
    nome: "Leonardo",
    profissao: "Professor",
    idade: 42
}

console.log(typeof pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);

// Deletando e crindo propriedades

let carro = {
    marca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro);
delete carro.portas;
console.log(carro);
carro.tetosolar = true;
console.log(carro);

// Copiar proriedade de um objeto para outro

Object.assign(carro, pessoa);
console.log(carro);

console.log(Object.keys(carro));

// Mutacao

let obj1 = {
    pontos: 10
}

let obj2 = obj1;

let obj3 = {
    pontos: 10
}

console.log(obj1 === obj2);
console.log(obj1 === obj3);

obj1.pontos = 20;

console.log(obj1.pontos);
console.log(obj2.pontos);
console.log(obj3.pontos);

// Percorrer um array/objeto

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

for (let i in carro) {
    console.log(carro[i]);
}

//Metodos em arrays

numeros.push(10, 13, 16);
console.log(numeros);
numeros.pop();
console.log(numeros);

numeros.unshift(-3, -2, -1);
console.log(numeros);
numeros.shift();
console.log(numeros);

console.log(nomes.indexOf("Carlo"));

nomes.forEach(nome => {
    console.log(nome);
})

// Operador Rest

function operadorRest(...args) {
    console.log(args);
}

operadorRest(5, 10, 15, 20)

