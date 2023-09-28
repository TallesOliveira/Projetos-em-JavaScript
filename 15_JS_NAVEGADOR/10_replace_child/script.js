let novoElemento = document.createElement("p"); //criando um parágrafo

let texto = document.createTextNode("algum texto");//escrevendo o que vai ficar dentro do parágrafo

novoElemento.appendChild(texto);// colocando o texto dentro da tag p

let heading = document.querySelector('#titulo-principal');

let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento,heading);