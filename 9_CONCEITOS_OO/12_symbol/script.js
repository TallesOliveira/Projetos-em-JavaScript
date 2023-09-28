class Cachorro {
    constructor(raca, cor) {
      this.raca = raca;
      this.cor = cor;
    }
    latir(){
      console.log("Au Au");
    }
  }
  
  Cachorro.prototype.raca = "SRD"
  let labrador = new Cachorro('Labrador','Amarelo');

  let patas  = Symbol();
  Cachorro.prototype[patas] = 4;
  
  console.log(labrador);
  console.log(labrador.patas);
  labrador.latir();
  

  console.log(Cachorro.prototype.raca);
  console.log(labrador.raca);

  //acessando o symbol 
  console.log(Cachorro.prototype[patas]);
  console.log(labrador[patas]);