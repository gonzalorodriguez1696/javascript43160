let entrada = 1

//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {

    switch (entrada) {
        case 1:
            console.log("Es Lunes")
            break;
        case 2:
            console.log("Es Martes");
            break;
        case 3:
            console.log("Es Miercoles")
            break;
        case 4:
            console.log("Es Jueves");
            break;
        case 5:
            console.log("Es Viernes")
            break;
        case 6:
            console.log("Es Sabado");
            break;
        case 7:
            console.log("Es Domingo");
            break;
        default:
            console.log("La semana no tiene ese día")
            break;
    }

    entrada = "ESC";
}