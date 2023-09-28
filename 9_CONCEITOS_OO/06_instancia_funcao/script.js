function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au Au");
    }
    return cachorro;
}

let pastor = criarCachorro("Pastor Alemão", 4,"preto");
console.log(pastor);
pastor.latir();