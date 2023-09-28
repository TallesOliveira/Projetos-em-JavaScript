function Cachorro (raca, patas, cor,){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("AAauuuuu")
    }
}
let huscky = new Cachorro ('huscky',4,"cinza");
console.log(huscky);
huscky.uivar();