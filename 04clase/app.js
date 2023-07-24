const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21

let productoPrecio = 100
let productoIVA = iva(productoPrecio)
let productoDescuento = 10

let resultado =  resta( suma(productoPrecio, productoIVA) , productoDescuento )

console.log(resultado)