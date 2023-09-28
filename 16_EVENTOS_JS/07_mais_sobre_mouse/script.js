let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener("mousedown", function(){
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", function(){
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick",function(){ 
    //doble click no mouse
    console.log("Clicou duas vezes");
});

btn2.addEventListener("contextmenu", function(e){
    //fazendo o botão direito contar como um clique
    e.preventDefault();
    console.log("Botão direito");
});
    
