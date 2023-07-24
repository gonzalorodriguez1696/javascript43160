let rta = "ESC";

do {

    let nombre = prompt("Ingrese el nombre")
    let apellido = prompt("Ingrese el apellido")
    
    alert("Los datos fueron guardados con éxito!")
    alert("Usuario cargado: \nNombre: "+nombre+ "\nApellido: "+apellido)

    rta = prompt("¿Desea usted seguir cargando datos?(Ingrese 'ESC' para salir)").toUpperCase()

}
while (rta != "ESC")

alert("Este otro mensaje si.")