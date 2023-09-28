let num = 2;
let num1 = 5;
let num2 = 4;
let num3 = 7;

function imprimirNumero(...args){
    for(let i = 0; i < args.length;i++){
        console.log(args[i]);
    }
}

imprimirNumero(8,4,74,4,8,3,7,4,5,);