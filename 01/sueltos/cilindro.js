/*let r = 5
let h = 10

let area_c= (2*Math.PI*r*h) + (2*Math.PI*(r**2))
console.log(area_c)
*/
/*
console.log(Infinity)
console.log(-Infinity)
console.log(null)
console.log(-null)
console.log(undefined)
console.log(-undefined)
*/
/*
var num1 = 1-3
var num2 = 2-3
console.log(--num1)
console.log(++num2)
*/
/*
var midato = 6% 2
console.log(midato)
*/
/*
let dato, num
dato = window.prompt("Introduce un numero","0")
num = parseInt(dato)
num = num*2
console.log("El doble es: "+num)
*/
/*
a = window.prompt("introduce numerasao 1","0")
b = window.prompt("introduce numerasao 2","0")
c = parseInt(a)
d = parseInt(b)
if(c>d){
    result = " el primero"
}else{
    result = " el segundo"
}
document.write(result)
*/
/*
var x = true
var y = !x
var z = x&&y
var zz = x||y

console.log(x)
console.log(y)
console.log(z)
console.log(zz)
*/
/*
a1 = 24 % 5
a2 = 7 / 2 +2.5
a3 = 10.8 / 2 + 2 
a4 = (4 + 6) * 3 + 2 * (5 - 1)
a5 = 5 / 2 + 17 % 3
a6 = 7 >= 5 || 27 ==! 8
a7 = (45 <= 7) ||! (5 >= 7)
a8 = 27 % 4 + 15 / 4
a9 = 37 / 4 * 4 - 2
a10 = (25>=7) && !(7<=2)
a11 = ('H'<'J') && ('9'==!'7')

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)
console.log(a10)
console.log(a11)
*/
/*
let edad = prompt("introduce tu edad: ")
if(edad<=0){
    console.error("si claro y yo soy robocop")
}else{
    if(edad >= 18){
        console.log("tienes "+edad+" obvio eres mayor de edad")
    }else{
        console.log("tienes "+edad+" obvio no eres mayor de edad")
    }
}
*/
/*
let cafe = prompt("cuanto vale el cafe?")
if(cafe<=1){
    console.log("ta barato")
}else if(cafe>=1.5){
        console.log("camarero la multa")
    }else{
        console.log("ponme una tostada tambien")
    }
*/
/*
let nota1 = prompt("introduce la nota 1")
let nota2 = prompt("introduce la nota 2")
let nota3 = prompt("introduce la nota 3")

nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

let media = (nota1 + nota2 + nota3) /3

console.log("la media es " + media)
if(media>=5){
    console.log("estas aprobado")
}else{
    console.log("estas cateao")
}
*/

function coches(){
let marca = prompt("introduce la marca del coche")
let modelo = prompt("introduce el modelo del coche")
let descuento = "0%"

if(marca === "ford"){
    if(modelo === "focus"){
        descuento = "10%"
    }else if(modelo === "fiesta"){
        descuento = "5%"
    }
}
document.write("El "+marca+" "+modelo+" tiene un "+descuento+" de descuento")
}