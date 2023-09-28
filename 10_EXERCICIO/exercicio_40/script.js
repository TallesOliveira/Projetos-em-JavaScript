class Conta{
    constructor(saldoCorrente,saldoPoupanca,juros){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = juros;
    }
    depositoCorrente(d){
       let dinheiro = this.saldoCorrente + d;
       this.saldoCorrente = dinheiro;
    }
    depositoPoupaca(d){
        let dinheiro = this.saldoPoupanca + d;
        this.saldoPoupanca = dinheiro;
    }
    saqueCorrente(s){
        let dinheiro = this.saldoCorrente - s;
        this.saldoCorrente = dinheiro;
    }
    saquePoupanca(s){
        let dinheiro = this.saldoPoupanca - s;
        this.saldoPoupanca = dinheiro;
    }
   tranferenciaContaConrrente(valor){
    this.saldoPoupanca -= valor;
    this.saldoCorrente += valor;
   }
   tranferenciaContaPoupanca(valor){
    this.saldoCorrente -= valor;
    this.saldoPoupanca += valor;
   }
}

class ContaEspecial extends Conta{
    constructor(saldoCorrente,saldoPoupanca,juros){
        super(saldoCorrente, saldoPoupanca,juros*2)
    }
}

conta = new Conta(500,800,14);
conta.depositoCorrente(10);
console.log(conta);
conta.depositoPoupaca(200);
console.log(conta);
conta.saqueCorrente(50);
conta.saquePoupanca(300);
console.log(conta);

conta.tranferenciaContaConrrente(400);
console.log(conta);
conta.tranferenciaContaPoupanca(200);
console.log(conta);

let conta2 = new ContaEspecial(1000,5000,1);
console.log(conta2);