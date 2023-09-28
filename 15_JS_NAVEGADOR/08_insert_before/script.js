let novoElemento = document.createElement("p"); //criando um parágrafo

let texto = document.createTextNode("algum texto");//escrevendo o que vai ficar dentro do parágrafo

novoElemento.appendChild(texto);// colocando o texto dentro da tag p

let elementoAlvo = document.querySelector("#titulo-principal");// falando antes do que vai ficar o p

let elementoPai = document.querySelector("#container-principal");//falando aonde vai ficar o p

elementoPai.insertBefore(novoElemento, elementoAlvo);//adicionado o p no lugar requesitado anteriormente