class Habitacion{
    constructor(){
        this.nombre = "nombre original"
    }
}

const habitacionA = new Habitacion()

const habitacionB = habitacionA

habitacionB.nombre = "nombre modificado por habitacion B"

console.log(habitacionA.nombre)

const listaHabitaciones = []

listaHabitaciones.push(habitacionA)

listaHabitaciones[0].nombre = "nombre modificado por lista de habitaciones"

console.log(habitacionB)

let listaHabitacionesDisponibles = []
listaHabitacionesDisponibles.push(habitacionA)

listaHabitacionesDisponibles[0].nombre = "nombre modificado por lista disponible"


console.log(habitacionA)
console.log(habitacionB)
console.log(listaHabitaciones)