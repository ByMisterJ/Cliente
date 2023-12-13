var base = prompt("base")
var expo = prompt("exponente")

console.log(pot(base,expo))

function pot (base, expo){
    resultado = Math.pow(base,expo) 
    return resultado
}