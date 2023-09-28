let pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa)=== Object.prototype);

console.log(pessoa.hasOwnProperty("maos")); //verificando se tem a propriendade maos no objeto pessoa