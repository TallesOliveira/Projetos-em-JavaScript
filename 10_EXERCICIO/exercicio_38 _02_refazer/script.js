class Endereco{
    constructor(bairro,cidade,estado){
        this.bairro = bairro;
        this.cidade= cidade;
        this.estado = estado;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set estadoNovo(estadoNovo){
        this.estado = estadoNovo;
    }
}

let endereco = new Endereco("pinheiros","SIA","DF");
console.log(endereco);
endereco.novoBairro = "Mugin Mirim";
endereco.novaCidade = "Setor O";
endereco.estadoNovo = "São Paulo";
console.log(endereco);