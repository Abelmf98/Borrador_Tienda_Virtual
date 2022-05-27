export class VistaCarrito{

    constructor(controlador){

        this.controlador = controlador
        document.getElementById('verProductos').onclick = this.verProductos.bind(this)
        document.getElementById('boton').onclick = this.validar.bind(this)
    }
    
    mostrar(ver){

        if(ver){

            divCarrito.style.display = 'block'
        }else{

            divCarrito.style.display = 'none'
        }
    }

    verProductos(){
        this.controlador.verProductos()
    }

    validar(){
        this.validarLetraDNI()
        this.validacionEdad()

        document.getElementById('form').style.display="none"
        document.getElementById('productoCarritos').style.display="block"
    }

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

                console.log('Dni erroneo, la letra del NIF no se corresponde')
            }else{

                console.log('Dni correcto')
            }
        }else{
            
            console.log('Dni erroneo, formato no válido')
        }
    

    }
    
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
       
        if(edad>=18)
            window.alert("Mayor de 18 años")
        else
            window.alert("Menor de 18 años")
    }

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