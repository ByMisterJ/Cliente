let num1 = prompt("Introduce el primer numero")
let num2 = prompt("Introduce el segundo numero")
let num3 = prompt("Introduce el tercer numero")

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if(num1==num2-1){
    if(num2==num3-1){
        console.log("Si son consecutivos")
    }else console.log("No son consecutivos")
}else if(num1==num2+1){
    if(num2==num3+1){
        console.log("Si son consecutivos")
    }else console.log("No son consecutivos")
}else console.log("No son consecutivos")