class Producto{
    constructor(id,nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }

    aumentarCantidad(cantidad){
        this.cantidad =  this.cantidad + cantidad
    }

    descripcion(){
        return  "id: " + this.id+
                "\nnombre: " + this.nombre+
                "\nprecio: " + this.precio
    }

    descripcionDeCompra(){
        return  "nombre: " + this.nombre+
                "\nprecio: " + this.precio+
                "\ncantidad: "+ this.cantidad
    }
}

class ProductoController{
    constructor(){
        this.listaProductos = []
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    buscarProductoPorID(id){
        return this.listaProductos.find(producto => producto.id == id)
    }

    mostrarProductos(){
        let listaEnTexto = ""
        this.listaProductos.forEach( producto => {
            //console.log(producto.descripcion())
            listaEnTexto = listaEnTexto + producto.descripcion() + "\n---------------------\n"
        })
        alert(listaEnTexto)
    }
}

class Carrito{
    constructor(){
        this.listaCarrito = []
    }

    agregar(producto,cantidad){
        //existe ya el producto?
        let existe = this.listaCarrito.some( el => el.id == producto.id)
        if(existe){
            producto.aumentarCantidad(cantidad)
        }else{
            producto.aumentarCantidad(cantidad)
            this.listaCarrito.push(producto)
        }
    }

    mostrarProductos(){
        let listaEnTexto = "Carrito de compras:\n"
        this.listaCarrito.forEach(producto => {
            listaEnTexto = listaEnTexto + producto.descripcionDeCompra() + "\n--------------\n"
            //console.log(producto.descripcionDeCompra())
        })
        alert(listaEnTexto)
    }

    calcularTotal(){
        return this.listaCarrito.reduce( (acumulador,producto) => acumulador + producto.precio * producto.cantidad ,0)
    }

    calcularIVA(){
        return this.calcularTotal() * 1.21
    }
}

const CP = new ProductoController()
const CARRITO = new Carrito()

CP.agregar(new Producto(1,"producto1", 250, 0))
CP.agregar(new Producto(2,"producto2", 350, 0))
CP.agregar(new Producto(3,"producto3", 400, 0))
CP.agregar(new Producto(4,"producto4", 100, 0))

let rta

do{
    CP.mostrarProductos()
    let opcion = Number(prompt("Ingrese el código del producto que desea agregar"))
    let producto = CP.buscarProductoPorID(opcion)
    let cantidad = Number(prompt("Ingrese la cantidad del producto seleccionado que desea"))
    CARRITO.agregar(producto,cantidad)
    alert("El producto fué añadido exitosamente: ")
    CARRITO.mostrarProductos()

    rta = prompt("Ingrese 'ESC' para salir").toUpperCase()
}while(rta != "ESC")

alert("El total de su compra es de: "+ CARRITO.calcularTotal())
alert("El total de su compra con IVA es de: "+ CARRITO.calcularIVA())
