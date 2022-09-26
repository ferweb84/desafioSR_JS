const stockProductos = [
    {id: 1, nombre: "Buzo Algodon", tipo: "Estampado Gris", cantidad: 10,desc: "Estampado", precio: 1200, talle: "Large", img: "./img/buzoB.jpg"},
    {id: 2, nombre: "Buzo Algodon", tipo: "Estampado", cantidad: 12, desc: "Estampado", precio: 1100, talle: "Large", img: './img/buzoB2.jpg'},
    {id: 3, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 15, desc: "Estampado", precio: 1200, talle: "Medium", img: './img/buzoB3.jpg'},
    {id: 4, nombre: "Buzo Algodon", tipo: "buzo", cantidad: 14, desc: "Estampado", precio: 1400, talle: "Medium", img: './img/buzoB2.jpg'},
    
]

export const getFetch = new Promise((respuesta, rejected) => {
    let url = 'www.productos.com.ar'
    if (url === 'www.productos.com.ar'){

        setTimeout(()=>{
            
        respuesta (stockProductos);
        }, 2000);
    
    }else {
        rejected('404 not found')
    }
})