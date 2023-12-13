var cadena = prompt("introduce una cadena")
console.log("La longitud de la cadena es: "+cadena.length)

console.log("La cadena en mayúsculas es: "+cadena.toUpperCase())
console.log("La cadena en minúsculas es: "+cadena.toLowerCase())
console.log("CADENA AL REVES (letra por letra)")
for (let i = cadena.length; i >= -1; i--) {
    console.log(cadena.charAt(i))
}
console.log("CADENA AL REVES")
var arr = []
arr = cadena.split(" ")
for (let i = arr.length -1; i >= 0; i--) {
    console.log(arr[i])
}