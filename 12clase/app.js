class Producto {
    constructor(id, nombre, precio, descripcion, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.descripcion = descripcion
        this.img = img
    }
}

class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    levantarStorage(){
        let listaCarritoJSON = localStorage.getItem("listaCarrito")
        this.listaCarrito = JSON.parse(listaCarritoJSON)
    }

    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    agregar(productoAgregar) {
        if( this.listaCarrito.some(producto => producto.id == productoAgregar.id ) ){
            
        }
        this.listaCarrito.push(producto)
    }

    eliminar(productoEliminar){
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice,1)
    }

    mostrarProductos() {
        let contenedor_carrito = document.getElementById('contenedor_carrito')
        contenedor_carrito.innerHTML = ""
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <button class="btn btn-danger" id="eliminar-${producto.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>`
        })

        this.listaCarrito.forEach(producto => {
            let btn_eliminar = document.getElementById(`eliminar-${producto.id}`)
            btn_eliminar.addEventListener("click", () => {
                this.eliminar(producto)
                this.guardarEnStorage()
                this.mostrarProductos()
            })
        })
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
            contenedor_productos.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btn-primary" id="ap-${producto.id}">Añadir al carrito</a>
            </div>
        </div>
            `
        })

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

//Instancias de Producto
const p1 = new Producto(1, "ryzen 3", 100000, "un producto de gama baja", "https://img.xentra.com.mx/xentra_jbsystem/img/productos/YD3200C5FHBOX/YD3200C5FHBOX_842_31_07_21_06_39.webp")
const p2 = new Producto(2, "ryzen 5", 150000, "un producto de gama media", "https://m.media-amazon.com/images/I/51f2hkWjTlL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p3 = new Producto(3, "ryzen 7", 300000, "un producto de gama alta", "https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_ML2_.jpg")
const p4 = new Producto(4, "ryzen 9", 500000, "un producto de gama alta", "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX300_SY300_.jpg")

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