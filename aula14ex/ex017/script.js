/*n = 2
t1 = n * 1
t2 = n * 2
t3 = n * 3
console.log(t1, t2, t3) */
function Calcular(){
   let num = document.getElementById('num')
   let tab = document.getElementById('seltab')
   if (num.value.length == 0){
    window.alert('Por favor, digite um número!')
   }else{
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = '' //isso serve pra limpar cada vez pedir um número novo pra não tudo um embaixo do outro 
    while (c <= 10){
        let item = document.createElement('option') //criando elemento option em javascript mais no html ficaria dentro do select o option que tem que escrever 1 de cada vez
        item.text = `${n} x ${c} = ${n*c}` // e aqui que é feita a conta em sí da tabuada 
        item.value = `tab${c}` // serve para outras liguagens por exemplo php
        tab.appendChild(item) //para mostrar na tela appendchild sign aparecer elemento filho 
        c++
    }
   }
   
}
