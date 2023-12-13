let color = prompt("De que color esta el semaforo?")

color = color.toLowerCase()

switch (color) {
    case "verde":
        console.log("adelante")
        break;

    case "ambar":
        console.log("precaucion")
        break;

    case "rojo":
        console.log("stop")
        break;

    default:
        console.error("color erroneo")
        break;
}