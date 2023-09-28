let novoElemento = document.createElement("p"); //criando um parágrafo

let texto = document.createTextNode("algum texto");//escrevendo o que vai ficar dentro do parágrafo

novoElemento.appendChild(texto);// colocando o texto dentro da tag p

let p = document.querySelector("#parágrafo-principal"); //aonde ele vai ficar

let pai = p.parentNode;//serve para descobrir e falar o pai do let p

pai.appendChild(novoElemento);