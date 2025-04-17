// Number
console.log(typeof 13);
console.log(typeof 1.8);
console.log(typeof -5);
console.log(typeof (2 + 2));
console.log(typeof (2 * 4 - 3));
console.log(10 % 2);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

// String

console.log(typeof 'Isso é uma string');
console.log(typeof "Este texto aqui também");
console.log(typeof `E este também`); // Template Literals
console.log('Essa é uma string \n de duas linhas');
console.log("Essa é uma string com 'aspas simples'");
console.log('Essa é uma string com "aspas duplas"');
console.log(`A soma de 2 + 2 é ${2+2}`);
console.log("Salada" + ' de ' + `frutas`);

// Boolean
console.log(typeof (3 > 5));
console.log(typeof (5 > 3));
console.log(3 > 5);
console.log(5 > 3);
console.log(2 == 2);
console.log(2 === 2);
console.log(`2 == "2" = ${2 == "2"}`);
console.log(`2 === "2" = ${2 === "2"}`);
console.log(`true && true = ${true && true}`);
console.log(`true && false = ${true && false}`);
console.log(`false || false = ${false || false}`);
console.log(`!true = ${!true}`);
console.log(`!false = ${!false}`);
console.log(`!true && false || !false && true = ${!true && false || !false && true}`);
console.log(`true ? 1 : 2 = ${true ? 1 : 2}`)
console.log(`false ? 1 : 2 = ${false ? 1 : 2}`)

// Empty Values

console.log(`typeof undefined = ${typeof undefined}`)
console.log(`typeof null = ${typeof null}`)
console.log(`undefined = ${undefined}`)
console.log(`null = ${null}`)