let nome = /\w+: (Talles|Pedro|Maria)/;
console.log(nome.test("Nome: Talles"));
console.log(nome.test("Nome: José"));
console.log(nome.test("Nome: Pedro"));
console.log(nome.test("Nome: Pedro"));