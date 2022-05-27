import {Producto} from "../pojos/producto.js";

export class Modelo{
    constructor(){
        this.productos = []
        this.carritos = []
        this.cargar()
    }

    async cargar(){
        /* this.productos[0] = new Producto('./img/tarta-queso.jpg', 'Tarta de queso', 15, false)
        this.productos[1] = new Producto('./img/almendras.jpg', 'Tarta de almendras', 10, true)
        this.productos[2] = new Producto('./img/tpastelera.jpg', 'Tarta de crema pastelera', 12.50, false)
        this.productos[3] = new Producto('./img/chocolate.jpg', 'Tarta de chocolate', 14, true)
        this.productos[4] = new Producto('./img/brazogitano.jpeg', 'Brazo de gitano', 20, false) */

        await fetch('./json/producto.json')
            .then(respuesta => respuesta.json())
            .then(producto=>{ this.productos = producto});


    }

    getProductos(){
        return this.productos
    }
    
    push(producto){
        this.carritos.push(producto)
    }
}