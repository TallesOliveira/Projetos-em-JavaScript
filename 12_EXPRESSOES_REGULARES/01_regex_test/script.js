let reg1 = new RegExp("bola");

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

let reg2 = /bola/;
console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));

let text = "Tem bola na cesta";
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("4454474878"));