let pessoa = {
    nome: "Talles",
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = "Pedro";
console.log(pessoa.nome);

//pessoa tinha o nome talles mais fiz a mutação para o objeto pessoa2 e perguntei ao console se eles eram e iguais e ele respondeu que sim, depois mudei o nome no objeto pessoa2, e fui ver o  pessoa.nome e tinha mudado o pessoa original também