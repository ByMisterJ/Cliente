let num1 = prompt("Introduce el primer numero")
let num2 = prompt("Introduce el segundo numero")
let num3 = prompt("Introduce el tercer numero")

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if(num1>num2){
    if(num2>num3){
        console.log(num1+">"+num2+">"+num3)
    }else if(num1>num3){
        console.log(num1+">"+num3+">"+num2)
    }else{console.log(num3+">"+num1+">"+num2)}
}else if(num2>num1){
    if(num1>num3){
    console.log(num2+">"+num1+">"+num3)
    }else if(num2>num3){
        console.log(num2+">"+num3+">"+num1)
    }else{console.log(num3+">"+num2+">"+num1)}
}else if(num3>num1){
    if(num1>num2){
        console.log(num3+">"+num1+">"+num2)
    }else if(num3>num2){
        console.log(num3+">"+num2+">"+num1)
    }else{console.log(num2+">"+num2+">"+num1)}
}