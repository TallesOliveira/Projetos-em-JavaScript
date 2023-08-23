let idade = 17;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log("Você não pode dirigir porque você não tem CNH");
} else if (idade >= 18 && cnh == true){
    console.log("Você pode DIRIGIR!")
}else{
    console.log('Você não pode DIRIGIR')
}