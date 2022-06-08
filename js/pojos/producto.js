/**
 * @file productos.js
 * @brief Productos => (Pojo)
 * @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

/**
 * @class clase Producto exportada 
 */
export class Producto{

    /**
     * Constructor principal de la clase Productos
     * @param {*} imagen 
     * @param {*} nombre 
     * @param {*} precio 
     * @param {*} oferta 
     */
    constructor(imagen, nombre, precio, oferta){

        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
        this.oferta = oferta
    }
}