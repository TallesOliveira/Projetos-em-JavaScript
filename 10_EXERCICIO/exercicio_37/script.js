class Carrinho{
    constructor(itens,quantidade,valorTotal){
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    addItem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){ // um loop em cada item do carrinho
            if(this.itens[itemCarrinho].id == item.id){ // se o id do item que estamos add é um já existente ele somar com o número que tinha antes 
                this.itens[itemCarrinho].quantidade += item.quantidade; // a quantidade vai aumentar 
                contador = 1;
            }
           
        }
        if(contador == 0){ // se o item que foi adicionado não existia antes ele ser adionado ao objeto 
            this.itens.push(item);
        }
        this.quantidade += item.quantidade; //adicionando  á quantidade total os itens que foram adicionados 
        this.valorTotal += item.preco * item.quantidade; // adicionando ao valor total os itens que foram adicionados 
    }

    removeItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
               let obj = this.itens[itemCarrinho];
               let index = this.itens.findIndex(function(obj) {return obj.id == item.id});

               this.quantidade -= this.itens[itemCarrinho].quantidade;
               this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;
               this.itens.splice(index, 1);
            }
        }
    }
  

}

let carrinho = new Carrinho([
    {
        id:1,
        nome: "Camisa",
        quantidade: 1,
        preco:20
    },
    {
        id: 2,
        nome:"Calça", 
        quantidade: 2,
        preco:50
    }
], 3,120)

console.log(carrinho);

carrinho.addItem({id:1, nome:"Camisa", quantidade:2, preco:20});

console.log(carrinho);

carrinho.addItem({id:3, nome:"Boné", quantidade:1, preco:15});

console.log(carrinho);

carrinho.removeItem({id:1, nome: "Camisa", quantidade:1, preco:20});