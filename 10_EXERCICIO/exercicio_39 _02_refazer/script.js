class Carro{
    constructor(marca,cor,gasolinaRestante,consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }
    dirigir(km){
        let litrosConsumidos = km/this.consumo;
        this.gasolinaRestante = litrosConsumidos;
    }
    abastecer(l){
        this.gasolinaRestante += l;
    }
}

let carro = new Carro("Ferrari","Vermelha",50,6);
console.log(carro);
carro.dirigir(60);
console.log(carro);
carro.abastecer(10);
console.log(carro);