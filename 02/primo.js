var num = prompt("introduce un numero")
var divisible=0
divisible = parseInt(divisible)

for (let i = 1; i <= num; i++) {
    if(num%i===0){
        divisible++
    }
}
if(divisible===2){
    console.log("es primo")
}else console.log("no es primo")

