/**
 * @file vistacarrito.js
 * @brief Vista de carrito => (Vista)
 * @author Abel Mansilla Felipe <amansillafelipe.guadalupe@alumnado.fundacionloyola.net>
 * @version 1.0
 * @license GPL-3.0-or-later
 */

/**
 * @class clase VistaCarrito exportada
 */
export class VistaCarrito{

    /**
     * Contructor principal de la clase VistaCarrito
     * @param {*} controlador 
     */
    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('boton').onclick = this.validar.bind(this)

        
    }
    
    /**
     * Método para ocultar y visualizar el carrito con productos
     * @param {*} ver 
     */
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    /**
     * Método para ver los productos del carrito
     */
    verProductos(){
        this.controlador.verProductos()
    }

    /**
     * Método para hacer las comprobaciones correspondientes a las validaciones del formulario de registro
     * con el cual si no hay algun campo relleno no dejará acceder a los productos del carrito
     */
    validar(){
        
       if(this.validarNombre() && this.validarEmail() && this.validarPass() && this.validarDireccion() && this.validarLetraDNI() && this.validacionEdad()){
        true   
        document.getElementById('form').style.display="none"
        document.getElementById('productoCarritos').style.display="block"
       }else{
        document.getElementById('form').style.display="block"
       }
    }

    /**
     * Método para la validacion del nombre
     * @param {*} valor 
     * @returns true false
     */
    validarNombre(valor){
        var valor = document.getElementById('nombre').value
        if(valor == null || valor.length == 0 || /^\s+$/.test(valor)){
            window.alert('El campo nombre es obligatorio')
            return false
        }else{
            return true
        }
    }

    /**
     * Método para la validacion de correo
     * @param {*} correo 
     * @returns true false
     */
    validarEmail(correo){
        var correo = document.getElementById('correo').value
        var exp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        var esValido = exp.test(correo)

        if(!esValido){
            window.alert('El correo es obligatorio')
            return false
        }else{
            return true
        }
    }

    /**
     * Método para validar la contraseña
     * @param {*} contrasenia 
     * @returns true false
     */
    validarPass(contrasenia){
        var contrasenia = document.getElementById('password').value
        if(contrasenia.length <8){
            window.alert('La contraseña debe ser rellena, introduzca 8 caracteres o mas')
            return false
        }else{
            return true
        }
    }

    /**
     * Método para validar la letra del DNI
     * @param {*} dni 
     * @returns true false
     */
    validarLetraDNI(dni){
        dni = document.getElementById('dni').value

        var numero, letr, letra, regExp

        regExp = /^\d{8}[a-zA-Z]$/
        
        if(regExp.test (dni) == true){

            numero = dni.substr(0,dni.length-1)
            letr = dni.substr(dni.length-1,1)
            numero = numero % 23
            letra='TRWAGMYFPDXBNJZSQVHLCKET'
            letra=letra.substring(numero,numero+1)

            if (letra!=letr.toUpperCase()){

                window.alert('Dni erroneo, la letra del NIF no se corresponde')
                return false
            }else{
                return true
            }
        }else{
            
            window.alert('Dni erroneo, formato no válido')
        }
    

    }

    /**
     * Método para validar la direccion
     * @param {*} direccion 
     * @returns true false
     */
    validarDireccion(direccion){
        var direccion = document.getElementById('direccion').value
        if(direccion == null || direccion.length == 0 || /^\s+$/.test(direccion) ){
            window.alert('Se debe rellenar la direccion')
            return false
        }else{
            return true
        }
    }
    
    /**
     * Método para validar la edad, si es menor de 18 no le dejara acceder
     * @param {*} fecha 
     * @returns 
     */
    validacionEdad(fecha){
        fecha = document.getElementById('fecha').value

        var fechaHoy = new Date()
        var fechaNacimiento = new Date(fecha)
        var edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear()
        var c = fechaHoy.getMonth() - fechaNacimiento.getMonth()

        if(c<0 || (c === 0 && fechaHoy.getDate() < fechaNacimiento.getDate())){
            edad --
        }

        console.log(edad)
       
        if(edad>=18){
            return true
        }else{
            window.alert("Menor de 18 años")
            return false
        }
    }

    /**
     * Método para recoger productos del carrito
     * Para ello le pasamos el array de productos
     * @param {*} producto 
     */
    recogerCarrito(producto){
        /* <div class="cajas">
            <div class="cajam">
                <img src="../img/tarta-queso.jpg">
                <p style="color: steelblue;">Tarta de queso</p>
                <p>10.00€</p>
                <span>2 unidades</span>
            </div>
            <div class="cajam">
                <img src="../img/tpastelera.jpg">
                <p style="color: steelblue;">Tarta de crema pastelera</p>
                <p>12.00€</p>
            </div>     
        </div> */
        let cajas = document.createElement('div')
        productoCarritos.appendChild(cajas)
        cajas.classList.add('cajas')

        let caja = document.createElement('div')
            cajas.appendChild(caja)
            caja.classList.add('caja')

            let img = document.createElement('img')
            caja.appendChild(img)
            img.src=producto.imagen
            
            
            let p = document.createElement('p')
            caja.appendChild(p)
            p.textContent = producto.nombre 
            p.style = 'color:steelblue'

            let p2 = document.createElement('p')
            caja.appendChild(p2)

    }
}