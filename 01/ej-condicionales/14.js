var personas = prompt("numero de personas")
var dias = prompt("numero de dias")
var tarifa = 0

personas = parseInt(personas)
dias = parseInt(dias)
tarifa = parseFloat(tarifa)

tarifa = personas * 15 * dias

if(dias>=7 && personas>5){
    tarifa = tarifa *(25/100) 
}
console.log("La tarifa es: "+tarifa)