let color = prompt("De que color esta el semaforo?")

color = color.toLowerCase()

while (color=="rojo") {
    
    console.log("stop")

    color = prompt("De que color esta el semaforo?")
}
if (color=="verde") {
    console.log("adelante")
}else if (color=="ambar") {
    console.log("precaucion")
}else{
    console.error("color no valido")
}

var vehiculo

do {
    vehiculo = prompt("se acerca un vehiculo?")
    vehiculo = vehiculo.toLowerCase()
    console.log("para y continua si no vinene nadie")
} while (vehiculo=="si");
