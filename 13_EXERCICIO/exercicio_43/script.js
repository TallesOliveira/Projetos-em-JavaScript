let marca = /Marca: [Nike|Adidas]/;

console.log(marca.test("Marca: Nike"));
console.log(marca.test("Marca: new balance"));
console.log(marca.test("Marca: Adidas"));