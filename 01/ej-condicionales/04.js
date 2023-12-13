let num1 = prompt("introduce un numero")
let num2 = prompt("introduce un numero")
let num3 = prompt("introduce un numero")

if(num1<num2){
    if(num2<num3){
        console.log("el numero mayor es: "+num3)
    }else{
        console.log("el numero mayor es: "+num2)
    }
}else if(num1<num3){
        console.log("el numero mayor es: "+num3)
    }else{
        console.log("el numero mayor es: "+num1)
}