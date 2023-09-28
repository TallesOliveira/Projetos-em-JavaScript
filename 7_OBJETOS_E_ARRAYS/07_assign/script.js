let carro = {
    portas: 2,
    portamalas: "200l",
    motor:2.0,
}

let adicionar = {
    tetosolar: true,
    arcondionado: true,
}

console.log(carro);

Object.assign(carro,adicionar);

console.log(carro);