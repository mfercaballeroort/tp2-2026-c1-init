// tiempos por tipo de cafe

const tiemposPreparacion = {
    "Espresso": 3000,
    "Americano": 6000,
    "Latte": 9000,
    "Cappuccino": 12000,
    "Mocha": 15000
};    

const pedidos = [
    { cliente: "Juan", tipoCafe: "Espresso" },
    { cliente: "Maria", tipoCafe: "Latte" },
    { cliente: "Pedro", tipoCafe: "Cappuccino" },
    { cliente: "Ana", tipoCafe: "Mocha" },
    { cliente: "Luis", tipoCafe: "Americano" }
];

function pedidosStarbucks(pedido) {
    // recuerden que puedo llamar a una propiedad por su noombre en corchetes
    const tiempo = tiemposPreparacion[pedido.tipoCafe];

    setTimeout(() => {
        console.log(`Pedido de ${pedido.cliente} listo: ${pedido.tipoCafe}`);
        callbackCliente(pedido);
    }, tiempo);
}

const callbackCliente = (pedido) => {
    console.log(`Llamar al cliente ${pedido.cliente}: su pedido de ${pedido.tipoCafe} esta listo!`);
}

pedidos.forEach(pedido => pedidosStarbucks(pedido));