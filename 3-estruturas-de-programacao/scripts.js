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
console.log("Funcoes built-in (motor da linguagem)")

let idade = prompt("Qual é a sua idade?");
alert(`A idade digitada foi: ${idade}`);

let maiorNumero = Math.max(1, 3, 5, 10);
console.log("O maior número é: " + maiorNumero);

let cubo = Math.pow(4, 3);
console.log("4 elevado a 3 é: " + cubo);

let raizQuadrada = Math.sqrt(64);
console.log("Raiz quadrada de 64 é: " + raizQuadrada);

console.log("Numero randomico é: " + Math.random());