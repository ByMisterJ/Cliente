let num1 = prompt("Introduce el primer numero")
let num2 = prompt("Introduce el segundo numero")
let num3 = prompt("Introduce el tercer numero")

if(num1>=num2){
    if(num2>=num3){
        console.log("Si estan ordenados")
    }else console.log("No estan ordenados")
}else console.log("No estan ordenados")