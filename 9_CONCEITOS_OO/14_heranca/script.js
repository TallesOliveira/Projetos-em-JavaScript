class Mamifero{
  constructor(patas){
    this.patas = patas;
  }
}

class Cachorro extends Mamifero{ // o extends está falando que o pai e o mamifero 
  constructor(patas,raca){
    super(patas, patas); // está fazendo a alteração ou juntando as propriedades
    this.raca = raca;
  }
  latir (){
    console.log("Au Au Au");
  }
}

let pug = new Cachorro(4,"Pug");
console.log(pug);
pug.latir();