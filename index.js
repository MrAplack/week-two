/*Variables*/
// var nombre = "Felipe" //no se utiliza por problemas de seguridad

let nombre = "Felipe" //declara una variable
const pi = 3.14 //declara una constante

console.log (nombre)

nombre = "Sebastian"

console.log(nombre)

console.log("Hello World")

/* Tipo de datos*/
/* String - Cadena de Texto*/

let Apellido = "Soto"
let Color = "Naranjo"
let Descripcion = `Mi Apellido es ${Apellido} y mi color es ${Color}`

console.log(Apellido,Color)
console.log(Descripcion)

/* Number - Numero*/

let Edad = 20
let Tiempo = 1.5
let Negativo = -1

console.log("La Suma", Edad + Tiempo)


/* Boolean - Verdadero o Falos*/

let esRojo = false
let esAzul = true

/*Bonus*/

let Nulo = null
let Indefinido = undefined//sin definicion porque no le asigno valor//

/* Arrays - Listado Arreglo*/

let Colores = ["Rojo","Azul","Verde"]

console.log(Colores)
console.log(Colores[1])

/*Object - Objetos*/
let Perro = {
    edad: 2,
    color: "Negro",
    raza: "Kiltro"

}

console.log(Perro)
console.log(Perro.edad)
console.log(Perro.raza)

/* Funciones */

function HacerClick()/*Parametros*/ {
    console.log(Perro)

}/* Lines de Instrucciones*/


/* Funciones de flecha*/

const HacerCLick2 = () => console.log(Perro)