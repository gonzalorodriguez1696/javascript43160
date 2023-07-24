class Producto{
    constructor(id,nombre,precio){

    }

    descripcion(){
        return "id: " + id+
        "\nnombre: " + nombre+
        "\nprecio: " + precio + "\n"
    }
}

class Carrito{

    constructor(){
        this.listaProductos = []
    }

    cantidadProductos(){
        
    }

    calcularTotal(){
        //reduce
    }

    mostrarProductos(){
        //foreach
        this.listaProductos.foreach( el => {
            console.log(el.descripcion())
        })
        //producto.descripcion()
    }

    buscarProductos(){
        //filter
    }

    buscarProducto(){
        //find
    }

    ofertaDeVerano(){
        //map
    }

    ordenarPrecios(){
        //sort
    }
}