let pessoa = {
    nome: "Talles",
    idade: 21,
    profissão: "Programador",
};

console.log(pessoa.nome);
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = false;
console.log(pessoa);

pessoa.celular = "Xiome";
console.log(pessoa);