let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores= []

function isnumero(n){
    if(Number(n)>= 1 && Number(n)<= 100){
        return true
    }else{
        return false 
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function Adicionar(){
 if(isnumero(num.value)&& !inLista(num.value,valores)){
    valores.push(Number(num.value)) // colocando os valores de num e convertendo para número é colocando na variavel composta valores

    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado!` // está guardando o valor de num no select mais não está visível 

    lista.appendChild(item) // está mostrando visívelmente o valores guardados no select
    res.innerHTML = " "
 }else{
    window.alert('valor inválido ou já encontrado na lista')
 }
num.value = '' //serve pra q depois de adicionar o número na lista ficar em branco o button
num.focus()  // serve pra q depois de adicionar o piscador da setinha ja fique no button 
}
function Finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let todo = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior)
                maior = valores[pos]
            
            if(valores [pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / todo
        res.innerHTML= ``
        res.innerHTML += `<p>Ao todo temos ${todo} números cadastrados </p>`
        res.innerHTML += `<p> O valor maior informado foi ${maior}.</p>`
        res.innerHTML += `<p>O valor menor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
   
}