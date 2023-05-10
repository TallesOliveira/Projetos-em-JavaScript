function Contar(){
    let inicio = document.getElementById('nini')
    let fim = document.getElementById('nfim')
    let passo = document.getElementById('npasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar!`
        //window.alert('[ERRO] faltam dados!')
        
    }   else  {
        res.innerHTML = `Contando:<br> `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalído! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let c = i;c <= f;c += p){
            res.innerHTML += `${c}  \u{1F449}`
        } 
        
        } else {
            //contagem regressiva
            for (let c = i;c >= f;c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        
    }
res.innerHTML += `\u{1F3C1}`
}