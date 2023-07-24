let rta = ""

let i = 0

//Repetimos con While hasta que el usuario ingresa "ESC"
/*  1- Limitar la carga de usuarios hasta una máximo de 3 personas 
    2- En caso de que el usuario quiera cargar menos datos, tenga la posibilidad
        de finalizar el bucle
*/
while ( i < 3 && rta != "ESC" ) {

    //1- Le pregunto el nombre
    let nombre = prompt("¿Cuál es su nombre?")
    
    //2- Le pregunto el apellido
    let apellido = prompt("¿Cuál es su apellido?")
    
    //3- notificar al usuario - "Fué guardado en la base de datos con éxito"
    alert("Los datos fueron guardados con éxito.")
    alert("Los datos guardados son: \nNombre: " + nombre + "\nApellido: " + apellido)
    
    //4- ¿Desea continuar cargando usuarios?(Ingrese ESC para finalizar)
    rta = prompt("¿Desea usted continuar cargando usuarios?(Ingrese 'ESC' para finalizar)").toUpperCase()

    i = i + 1
    //i++
    //i += 1
}

alert("Salió del bucle, y continuó con el resto del código")