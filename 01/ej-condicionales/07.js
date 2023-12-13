let num1 = prompt("Introduce el primer numero")
let num2 = prompt("Introduce el segundo numero")

num1 = parseInt(num1)
num2 = parseInt(num2)

if(num1>num2){
    resultado = num1 - num2
}else{ resultado = num2 - num1 }
console.log("El resultado es: "+resultado)