// Declaracao de variaveis
console.log("Declaracao de variaveis")

let laranjas = 5;            // Compativel ES6
console.log(laranjas);
console.log(`Voce tem ${laranjas} laranjas` );
console.log(`Voce tem ${laranjas * laranjas} laranjas` );
laranjas = laranjas + 1;
console.log(`Voce tem ${laranjas} laranjas` );

var nome = "Mateus";         // Compativel ES5 (Nao utilizar)
const sobrenome = "Santos";  // Compativel ES6
// sobrenome = "Silva" (Gera erro)

let varComCamelCase = "Camelo";
let var_com_snake_case = "Cobra";

//Funcoes built-in (motor da linguagem)
console.log("\nFuncoes built-in (motor da linguagem)")

let idade = prompt("Qual é a sua idade?");
alert(`A idade digitada foi: ${idade}`);

let maiorNumero = Math.max(1, 3, 5, 10);
console.log("O maior número é: " + maiorNumero);

let cubo = Math.pow(4, 3);
console.log("4 elevado a 3 é: " + cubo);

let raizQuadrada = Math.sqrt(64);
console.log("Raiz quadrada de 64 é: " + raizQuadrada);

console.log("Numero randomico é: " + Math.random());

// Estruturas de controle
console.log("\nEstruturas de controle")

if (idade > 18 && maiorNumero === 10) {
    console.log("Pode entrar");
}

// nome = "João";

if (nome === "João" && sobrenome === "Santos") {
    console.log("Seu nome é João Santos");
} else {
    console.log("Seu nome não é João Santos");
}

let a = 5, b = 3;
if (a + b === 3) {
    console.log("O resultado é 3");
} else if (a === 4) {
    console.log("O valor de a é 4");
} else if (b === 3) {
    console.log("O valor de b é 3");
} else {
    console.log("Nenhuma das condições acima");
}
let c = a + b;
switch(c) {
    case c === 3:
        console.log("O resultado é 3");
        break;
    case a === 4:
        console.log("O valor de a é 4");
        break;
    case b === 3:
        console.log("O valor de b é 3");
        break;
    default:
        console.log("Nenhuma das condições acima");
}

let x = 10;
while(x > 0) {
    console.log(x);
    x = x - 1;
}

let y = 0;
do {
    console.log(y);
    y++; // y += 1;
} while(y < 5);

for (let numero = 2; numero <= 128; numero *= 2) {
    if (numero === 64) {
        continue;
    }
    console.log("O número é " + numero);
}