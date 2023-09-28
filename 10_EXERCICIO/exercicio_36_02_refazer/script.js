class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor){
        this.saldo += valor;
    }
    saque(valor){
        this.saldo -= valor;
    }

}
let conta = new Conta(5000);
console.log(conta);

conta.deposito(3000);
console.log(conta);
conta.saque(800);
console.log(conta);
