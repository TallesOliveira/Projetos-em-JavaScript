function texto(texto){
    if(texto.length > 10){
        console.log("Esse texto é  muito longo!");
    }
    else if(texto.length < 10){
        console.log("Texto dentro do limite!");
    }
}

texto("Texto com mais de 10 caracteres ");
texto("oi");