var A = prompt("introduce un numero")
var cifras = 0
do{
    cifras++
    A = A/10
}while(A>=1)

console.log(cifras)