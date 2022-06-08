/**
 * @file modelo.js
 * @brief Modelo
 * @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */
import {Producto} from "../pojos/producto.js";

export class Modelo{
    /**
     * Constructor principal de la clase Modelo
     */
    constructor(){
        this.productos = []
        this.carritos = []
        this.cargar()
    }

    /**
     * Método para cargar los productos recogidos del JSON
     */
    async cargar(){
        await fetch('./json/producto.json')
            .then(respuesta => respuesta.json())
            .then(productos=>{ console.log(productos)
                this.setProductos(productos)})


    }

    /**
     * Método para recoger los productos
     * @param {*} producto 
     */
    setProductos(producto){
        this.productos = producto
    }

    /**
     * Método para obtener los productos
     * @returns this.productos
     */
    getProductos(){
        return this.productos
    }
    
    /**
     * Método para añadir productos al carrrito
     * @param {*} producto 
     */
    pushCarrito(producto){
        this.carritos.push(producto)
    }
}