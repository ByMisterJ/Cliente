var num = parseInt(prompt("introduce un numero"))

num = Math.sqrt(num)

if(isNaN(num)){
    console.error("El numero es negativo")
}else console.log("El numero es positivo: "+num)