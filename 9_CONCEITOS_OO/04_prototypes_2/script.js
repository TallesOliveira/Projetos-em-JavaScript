let pessoa = {
    maos: 2,
}



const pessoaNova = Object.create(pessoa); // criando pessoaNova apartir de pessoa

console.log(pessoaNova.maos);// vendo se pessoa e o prototype de pessoaNova

console.log(pessoaNova.hasOwnProperty("maos")); // pessoaNova em sí não tem a propriedade maos mais conseguiu acessar por causa do prototype pessoa

console.log(Object.getPrototypeOf(pessoaNova)===pessoa); // vendo se realmente o prototype de pessoaNova e pessoa, que resulta em true 