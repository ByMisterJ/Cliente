var mes = prompt("dime el mes")

switch (mes) {
    case "enero"||"febrero"||"diciembre":
        console.log("Estamos en invierno")
        break;
    case "marzo"||"abril"||"mayo":
        console.log("Estamos en primavera")
        break;
    case "junio"||"julio"||"agosto":
        console.log("Estamos en verano")
        break;
    case "septiembre"||"octubre"||"noviembre":
        console.log("Estamos en otoño")
        break;     
        

    default:
        console.error("mes no existente")
        break;
}