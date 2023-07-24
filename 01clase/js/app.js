/*
    * esta aplicación tiene la capacidad de sumar 2 numeros.
    * es un comentario de bloque
*/

//declaración de variable
let nombre1;

//declaramos e inicializamos
let nombre2 = "Gonzalo"

//asignación
nombre1 = "John"


//tipo de dato numerico
let numero = 5

let numero_con_coma = 10.5

//tipo de dato string
/*
let palabra = "Hola"
let palabra2 = "5"

let  numeroA = 1;
let   numeroB = 2;
const NUMEROC = 3;

let resultadoSuma1 = numeroA + numeroB


numeroA = 5

let resultadoSuma2 = numeroA + numeroB
console.log("resultado2: " + resultadoSuma2)
console.log("resultado1: " + resultadoSuma1)
*/

//Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
let nombre = prompt("Ingrese su nombre")

console.log("¡Hola, " + nombre + "!" );

//Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let unNumero = 5
let otroNumero = Number(prompt("Ingrese un número"))
let resultado = unNumero + otroNumero
console.log(resultado);

//Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
let textoA = prompt("Ingrese un texto")
let textoB = prompt("Ingrese un texto")

let resultadoTextos = textoA + textoB

alert(resultadoTextos);
