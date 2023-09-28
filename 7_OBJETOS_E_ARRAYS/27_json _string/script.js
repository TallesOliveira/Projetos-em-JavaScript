let pessoa = {
    "nome": "Talles",
    "idade": 21,
    "profissão": "programador",
    "hobbies": ["Video Game","Leitura","Jogar Bola"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
