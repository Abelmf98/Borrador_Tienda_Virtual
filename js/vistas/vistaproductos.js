/**
 * @file vistaproductos.js
 * @brief Vista de Productos => (Vista)
 * @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

/**
 * @class clase VistaProductos exportada
 */
export class VistaProductos{

    /**
     * Constructor principal de la clase VistaProductos
     * @param {*} controlador 
     * @param {*} productos 
     */
    constructor(controlador, productos){

        this.controlador = controlador
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this);
        this.cargarProductos(productos)
    }

    /**
     * Método para visualizar o esconder los productos
     * @param {*} ver 
     */
    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else {

            divProducto.style.display = 'none';
        }
    }

    /**
     * Método que sirve para mostrar el carrito
     */
    verCarrito(){

        this.controlador.verCarrito()
    }

    /**
     * Método para cargar los productos
     * Se contruye mediante un array de productos
     * @param {*} productos 
     */
    cargarProductos(productos){

        let cajas = document.createElement('div')
        divProducto.appendChild(cajas)
        cajas.classList.add('cajas')

        productos.forEach(producto => {
                let caja = document.createElement('div')
                cajas.appendChild(caja)
                caja.classList.add('caja')

                if(producto.oferta){
                    caja.onmouseover = this.ofertas.bind(this, producto, caja)
                    caja.onmouseout = this.ocultar.bind(this, producto, caja)
                }

                let img = document.createElement('img')
                caja.appendChild(img)
                img.src=producto.imagen
                
                
                let p = document.createElement('p')
                caja.appendChild(p)
                p.textContent = producto.nombre 
                p.style = 'color:steelblue'

                let p2 = document.createElement('p')
                caja.appendChild(p2)
                p2.textContent = producto.precio.toFixed(2) +'€'

                let button = document.createElement('button')
                caja.appendChild(button)
                button.textContent = 'Añadir'
                
                button.onclick = this.anadirCarrito.bind(this, producto)
            })
    }

    /**
     * Método para añadir productos al carrito
     * @param {*} producto 
     */
    anadirCarrito(producto){
        console.log('Pulsado')
        console.log(producto)
        this.controlador.anadirCarrito(producto)
    }

    /**
     * Método para mostrar el total de productos que tenemos en el carrito
     * @param {*} entero 
     */
    setNumProductos(entero){
        document.getElementById('menucarrito').textContent = entero   
    }

    /**
     * Método para mostar las ofertas, con lo cual pasaremos el ratón por encima para visualizarlas
     * @param {*} producto 
     * @param {*} caja 
     */
    ofertas(producto, caja){
        /* <div class="cajas"><div class="caja">
        <img src="../img/tarta-queso.jpg">
        <p style="color: steelblue;">Tarta de queso</p>
        <p>10.00€</p>
        <P style="color: tomato;">¡¡¡OFERTA!!!</P>
        <button>Añadir</button> */

        let p3 = document.createElement('p')
        caja.appendChild(p3)
        p3.style='color: tomato'
        p3.textContent = '¡¡¡OFERTA!!!'

    }

    /**
     * Método para ocultar las ofertas cuando quitamos el ratón de encima
     * @param {*} producto 
     * @param {*} caja 
     */
    ocultar(producto, caja){
        console.log(caja.onmouseout)

        caja.getElementsByTagName('p')[2].remove()
    }

   
}