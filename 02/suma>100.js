var cont = 0
var suma = 0
for (let i = 0; i < 5; i++) {
    var num =prompt("introduce un numero")
    num = parseInt(num)
    if(num>100){
        cont++
    }
    suma = suma + num
}
console.log("suma: "+ suma)
console.log("cantidad numeros >100: "+cont)