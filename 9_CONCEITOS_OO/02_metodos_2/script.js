const cachorro = {
    raca: "SRD",
    uivar: function(){
        console.log("Auuuuuuuuu")
    },
    rosnar: function(){
        console.log("grrrrrrrrr")
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return `A raca é  ${this.raca}`;
    }
}

cachorro.setRaca("Pastor Alemão");
console.log(cachorro.raca);
console.log(cachorro.getRaca());