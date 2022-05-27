import {Tienda} from './../tienda.js'

export class VistaProductos{

    constructor(controlador, productos){

        this.controlador = new Tienda()
        document.getElementById('verCarrito').onclick = this.verCarrito.bind(this);
        this.cargarProductos(this.tienda.crearVista())
    }

    mostrar(ver){

        if(ver){

            divProducto.style.display = 'block'
        }else {

            divProducto.style.display = 'none';
        }
    }

    verCarrito(){

        this.controlador.verCarrito()
    }

    cargarProductos(productos){

        let cajas = document.createElement('div')
        divProducto.appendChild(cajas)
        cajas.classList.add('cajas')

        productos.forEach(producto => {
            
        });
            for (let producto of productos) {

                /* let caja = document.createElement('div')
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
                
                button.onclick = this.anadirCarrito.bind(this, producto) */
            }
    }

    anadirCarrito(producto){
        console.log('Pulsado')
        console.log(producto)
        this.controlador.anadirCarrito(producto)
    }

    setNumProductos(entero){
        document.getElementById('menucarrito').textContent = entero   
    }

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

    ocultar(producto, caja){
        console.log(caja.onmouseout)

        caja.getElementsByTagName('p')[2].remove()
    }

   
}