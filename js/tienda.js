import {VistaProductos} from './vistas/vistaproductos.js'
import {VistaCarrito} from './vistas/vistacarrito.js'
import {Modelo} from './modelos/modelo.js'

class Tienda{

    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    /**
     * Esperamos el resultado de la promesa
     */
    async iniciar(){

        this.modelo = new Modelo()
        await this.modelo.cargar()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }

    anadirCarrito(producto){
        this.modelo.pushCarrito(producto)
        this.vistaProductos.setNumProductos(this.modelo.carritos.length)
        this.vistaCarrito.recogerCarrito(producto)
    }

    async crearVista(){
        let datos = await this.modelo.cargar()
        console.log(datos)
        return datos
    }

    
}

new Tienda()