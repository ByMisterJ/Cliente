var num1 = prompt("numero1 :")
var num2 = prompt("numero2 :")
var num3 = prompt("numero3 :")

num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

function maximo(num1,num2,num3){

    if(num1>num2 && num1>num3){
        max = num1
    }
    if(num2>num1 && num2>num3){
        max = num2
    }
    if(num3>num2 && num3>num1){
        max = num3
    }

    return max
}
console.log("el maximo es: "+maximo(num1,num2,num3))