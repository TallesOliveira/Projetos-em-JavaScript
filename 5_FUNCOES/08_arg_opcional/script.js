function soma(a,b){
    if(a == undefined || b == undefined){
        console.log("Essa função precisa dos dois parâmetros");
    }else{
        return a + b;
    }
}

console.log(soma(4));

console.log(soma(10,2));

function saudacao (nome,idade){
    if(idade == undefined){
        console.log(`Olá ${nome}!`)
    }else{
        console.log(`Olá ${nome}, você tem ${idade} anos de idade!`)
    }
}

saudacao("Talles");

saudacao("Pedro", 30);