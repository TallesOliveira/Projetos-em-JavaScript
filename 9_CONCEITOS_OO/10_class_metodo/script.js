class Cachorro {
    constructor(raca, cor) {
      this.raca = raca;
      this.cor = cor;
    }
    latir(){
      console.log("Au Au");
    }
  }
  
  Cachorro.prototype.patas = 4; //definindo propriedade padrão
  let labrador = new Cachorro('Labrador','Amarelo');
  
  console.log(labrador);
  console.log(labrador.patas);
  labrador.latir();