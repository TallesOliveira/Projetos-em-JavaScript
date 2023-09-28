class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(d){
        this.saldo += d;
        console.log(`Você depositou ${d} e com isso seu saldo é de ${this.saldo} reais`);
    }
    saque(s){
        this.saldo -= s;
        console.log(`Você sacou ${s} e com isso seu saldo ficou ${this.saldo} reais`);
    }
}

let talles = new Conta(1000);

console.log(talles)
talles.deposito(500);
console.log(talles);

console.log(talles.saque(700));