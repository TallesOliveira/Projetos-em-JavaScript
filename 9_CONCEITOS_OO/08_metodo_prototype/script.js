function Cachorro (raca, patas, cor,){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuuuu")
}

Cachorro.prototype.latir = function(){
    console.log("Au Au Au")
}

let huscky = new Cachorro ('huscky',4,"cinza");
console.log(huscky);
huscky.uivar();
huscky.latir();