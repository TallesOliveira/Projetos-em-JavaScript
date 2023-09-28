let calculadora = {
    soma: function(x,y){
        return x + y
    },
    subtração:function(x,y){
        return x - y
    },
    multiplicação: function(x,y){
        return x * y
    },
    divisão: function(x,y){
        return x / y
    }
}

console.log(calculadora.soma(10,5));
console.log(calculadora.subtração(5,3));
console.log(calculadora.multiplicação(5,3))
console.log(calculadora.divisão(40,2));