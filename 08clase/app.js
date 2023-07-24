class Habitacion{
    constructor(id, capacidad_personas){
        this.id = id
        this.reservada = false
        this.fecha_inicio = null
        this.fecha_fin = null
        this.capacidad_personas = capacidad_personas
    }

    reservar(fecha_inicio, fecha_fin){
        this.reservada = true
        this.fecha_inicio = fecha_inicio
        this.fecha_fin = fecha_fin
    }

    disponible(){
        this.reservada = false
        this.fecha_inicio = null
        this.fecha_fin = null
    }
}

Habitacion.prototype.toString = function habitacionToString() {
    let descripcion =   "N° Habitacion: " + this.id+
                        "\nCapacidad de personas: "+this.capacidad_personas+
                        "\nFecha incio: "+this.fecha_inicio+
                        "\nFecha fin: "+this.fecha_fin+
                        "\nReservada: "+this.reservada+
                        "\n"
    
    return descripcion;
}

class Hotel{
    constructor(){
        this.listaHabitaciones = []
    }

    agregarHabitacion(habitacion){
        this.listaHabitaciones.push(habitacion)
    }

    mostrarHabitacionesDisponibles(capacidad_requerida = 1){
        console.log("==============")
        this.listaHabitaciones.forEach( habitacion => {
            //muestro las habitaciones no reservadas. Es decir, las disponibles.
            if((habitacion.reservada == false) && (habitacion.capacidad_personas >= capacidad_requerida)){
                console.log(habitacion.toString())
            }
        })
        console.log("==============")
    }

    reservarHabitacion(id_habitacion, fecha_inicio, fecha_fin){
        let habitacion_escogida = this.listaHabitaciones.find(habitacion => habitacion.id == id_habitacion)
        habitacion_escogida.reservar(fecha_inicio, fecha_fin)
        return habitacion_escogida
    }
    
}
//fecha_inicio, fecha_fin, capacidad_personas
let habitacion1 = new Habitacion(1,4)
let habitacion2 = new Habitacion(2,2)
let habitacion3 = new Habitacion(3,4)
let habitacion4 = new Habitacion(4,2)

habitacion4.reservar()

const controladorHotel = new Hotel()

controladorHotel.agregarHabitacion(habitacion1)
controladorHotel.agregarHabitacion(habitacion2)
controladorHotel.agregarHabitacion(habitacion3)
controladorHotel.agregarHabitacion(habitacion4)

//let valor = prompt("ingrese la capacidad deseada")
controladorHotel.mostrarHabitacionesDisponibles()

//let escogio = prompt("Escoja el N° de habitacion")
let escogio = 2
//let fecha_inicio = prompt("Desde que fecha, desea alojarse?")
////let fecha_fin = prompt("En que fecha, desea irse?")

let fecha_inicio = new Date()
let fecha_fin = new Date(2023,6,27)

const habitacion_escogida = controladorHotel.reservarHabitacion(escogio, fecha_inicio, fecha_fin)

console.log("Usted ha reservado la siguiente habitación: \n"+ habitacion_escogida.toString())

controladorHotel.mostrarHabitacionesDisponibles()