

/*
0= Domingo 
1= Segunda-Feira
2= Terça-Feira
3= Quarta-Feira
4= Quinta-Feira
5= Sexta-Feira
6= Sábado 
*/

var agora = new Date
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
    console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO[] Dia inválido')
}