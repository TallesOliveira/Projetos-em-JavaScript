let nomes = ["Talles","Pedro","Maria","Lucas","Matheus"];
let numeros = [10,7];

function contarElementos(x){
    if(x.length >= 5){
        console.log('Muitos elementos');
    }else{
        console.log("Poucos elementos ")
    }
}

contarElementos(nomes);
contarElementos(numeros);