function tipoDeDado(dado){
    if(typeof dado === "string"){
        console.log("é uma string");
    }else if(typeof dado === "number"){
        console.log("é um número!");
    }else if(typeof dado === "boolean"){
        console.log("Essa dado é do tipo boolean");
    }
}

tipoDeDado("Talles");
tipoDeDado(10);
tipoDeDado(false);
tipoDeDado(true);