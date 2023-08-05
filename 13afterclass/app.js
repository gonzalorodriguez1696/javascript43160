class Producto {
    
    constructor({id, nombre, precio, descripcion, img}){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.descripcion = descripcion
        this.img = img
    }

    aumentarCantidad(){
        this.cantidad++
    }

    disminuirCantidad(){
        if(this.cantidad > 1){
            this.cantidad--
            return true
        }

        return false
    }

    descripcionHTMLCarrito(){
        return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${this.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text">Cantidad: <button class="btn btn-dark" id="minus-${this.id}"><i class="fa-solid fa-minus fa-1x"></i></button>${this.cantidad}<button class="btn btn-dark" id="plus-${this.id}"><i class="fa-solid fa-plus"></i></button> </p>
                        <p class="card-text">Precio: $${this.precio}</p>
                        <button class="btn btn-danger" id="eliminar-${this.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>`
    }

    descripcionHTML(){
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text">$${this.precio}</p>
            <button class="btn btn-primary" id="ap-${this.id}">Añadir al carrito</button>
        </div>
    </div>
        `
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    levantarStorage(){
        this.listaCarrito = JSON.parse(localStorage.getItem("listaCarrito")) || []

        if(this.listaCarrito.length > 0){
            let listaAuxiliar = []

            for (let i = 0; i < this.listaCarrito.length; i++) {
                //pasa de objeto literal a una instancia de Producto
                let productoDeLaClaseProducto = new Producto(this.listaCarrito[i])
                listaAuxiliar.push(productoDeLaClaseProducto)
                //id, nombre, precio, descripcion, img
                //const element2 = new Producto(this.listaCarrito[i].id, this.listaCarrito[i].nombre, this.listaCarrito[i].precio, this.listaCarrito[i].descripcion, this.listaCarrito[i].img )
                
            }

            this.listaCarrito = listaAuxiliar
        }
        /*
        let listaCarritoJSON = localStorage.getItem("listaCarrito")
        if(listaCarritoJSON){
            this.listaCarrito = JSON.parse(listaCarritoJSON)
        }else{
            this.listaCarrito = []
        }
        */
    }

    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    agregar(productoAgregar) {
        //this.listaCarrito.push(productoAgregar)
        let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)
        
        if( existeElProducto ){
            let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
            producto.cantidad = producto.cantidad + 1
        }else{
            this.listaCarrito.push(productoAgregar)
        }
    }

    eliminar(productoEliminar){
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice,1)
    }

    mostrarProductos() {
        let contenedor_carrito = document.getElementById('contenedor_carrito')
        let total = document.getElementById('total')

        contenedor_carrito.innerHTML = ""        

        this.listaCarrito.forEach( producto => {
            contenedor_carrito.innerHTML += producto.descripcionHTMLCarrito()
        })

        //damos evento al botón "Eliminar producto del carrito"
        this.listaCarrito.forEach(producto => {
            
            let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
            let btn_plus = document.getElementById(`plus-${producto.id}`)
            let btn_minus = document.getElementById(`minus-${producto.id}`)

            btn_eliminar.addEventListener("click", () => {
                this.eliminar(producto)
                this.guardarEnStorage()
                this.mostrarProductos()
            })

            btn_plus.addEventListener("click",()=>{
                producto.aumentarCantidad()
                this.mostrarProductos()
            })

            btn_minus.addEventListener("click", ()=>{
                if( producto.disminuirCantidad() ){
                    this.mostrarProductos()
                }
            })

        })
        
        total.innerHTML = "Precio Total: $" + this.calcular_total()
    }

    calcular_total(){
        return this.listaCarrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad ,0)
    }
}

class ProductoController {
    constructor() {
        this.listaProductos = []
    }

    agregar(producto) {
        this.listaProductos.push(producto)
    }

    mostrarProductos() {
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProductos.forEach(producto => {
            contenedor_productos.innerHTML += producto.descripcionHTML()
        })

        //damos evento al botón "añadir al carrito"
        this.listaProductos.forEach(producto => {

            const btn = document.getElementById(`ap-${producto.id}`)

            btn.addEventListener("click", () => {
                carrito.agregar(producto)
                carrito.guardarEnStorage()
                carrito.mostrarProductos()
            })
        })
    }
}

let objLiteral = {id:1, nombre:"ryzen3", precio:100000, descripcion:"un producto de gama baja", img:"https://img.xentra.com.mx/xentra_jbsystem/img/productos/YD3200C5FHBOX/YD3200C5FHBOX_842_31_07_21_06_39.webp"}

//Instancias de Producto
const p1 = new Producto({id:1, nombre:"ryzen 3", precio:100000, descripcion:"un producto de gama baja", img:"https://img.xentra.com.mx/xentra_jbsystem/img/productos/YD3200C5FHBOX/YD3200C5FHBOX_842_31_07_21_06_39.webp"})
const p2 = new Producto({id:2, nombre:"ryzen 5", precio:150000, descripcion:"un producto de gama media", img:"https://m.media-amazon.com/images/I/51f2hkWjTlL.__AC_SX300_SY300_QL70_ML2_.jpg"})
//const p2 = new Producto(2, "ryzen 5", 150000, "un producto de gama media", "https://m.media-amazon.com/images/I/51f2hkWjTlL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p3 = new Producto({id:3, nombre:"ryzen 7", precio:300000, descripcion:"un producto de gama alta", img:"https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg"})
//const p3 = new Producto(3, "ryzen 7", 300000, "un producto de gama alta", "https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p4 = new Producto({id:4, nombre:"ryzen 9", precio:500000, descripcion:"un producto de gama alta", img:"https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg"})
//const p4 = new Producto(4, "ryzen 9", 500000, "un producto de gama alta", "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg")


//Instancia de Carrito | Es para los productos que el cliente escoja
const carrito = new Carrito()
carrito.levantarStorage()
carrito.mostrarProductos()

//Instancia de ProductoController - Gestiona todos los productos, es decir: mostrar, calcularTotal
const controlador_productos = new ProductoController()

controlador_productos.agregar(p1)
controlador_productos.agregar(p2)
controlador_productos.agregar(p3)
controlador_productos.agregar(p4)

controlador_productos.mostrarProductos()