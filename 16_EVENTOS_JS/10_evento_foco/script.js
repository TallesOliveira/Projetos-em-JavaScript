let input = document.querySelector("#input1");

input.addEventListener('focus', function(){
    //focus = entrar no input
    console.log("Entou no input");
});

input.addEventListener("blur", function(){
    //blur = sair do input
    console.log("Saiu do input");
});