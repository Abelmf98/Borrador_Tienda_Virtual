/**
 * @file tienda.js
 * @brief Tienda de productos => (Controlador)
 * @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

import {VistaProductos} from './vistas/vistaproductos.js'
import {VistaCarrito} from './vistas/vistacarrito.js'
import {Modelo} from './modelos/modelo.js'

class Tienda{

    /**
     * Constructos del controlador
     */
    constructor(){

        window.onload = this.iniciar.bind(this)
    }

    /**
     * Método para iniciar la aplicación y recibir llamadas asincronas
     */
    async iniciar(){

        this.modelo = new Modelo()
        await this.modelo.cargar()
        this.vistaProductos = new VistaProductos(this, this.modelo.getProductos())
        this.vistaCarrito = new VistaCarrito(this)

        this.vistaProductos.mostrar(true)
    }

    /**
     * Método para cargar la vista de la clase verCarrito
     */
    verCarrito(){

        this.vistaProductos.mostrar(false)
        this.vistaCarrito.mostrar(true)
    }

    /**
     * Método para cargar productos
     */
    verProductos(){

        this.vistaCarrito.mostrar(false)
        this.vistaProductos.mostrar(true)
    }

    /**
     * Método para añadir productos al carrito
     * @param {*} producto 
     */
    anadirCarrito(producto){
        this.modelo.pushCarrito(producto)
        this.vistaProductos.setNumProductos(this.modelo.carritos.length)
        this.vistaCarrito.recogerCarrito(producto)
    }

    /**
     * Método para cargar los productos
     * @returns datos
     */
    async crearVista(){
        let datos = await this.modelo.cargar()
        console.log(datos)
        return datos
    }
}

new Tienda()