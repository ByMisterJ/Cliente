var cont = 0
var suma = 0
for (let i = 0; i < 5; i++) {
    var num = parseInt(prompt("introduce un numero numero"))
    
    var suma = suma + num

    if(num>100){
        console.log(num + " es mayor que 100")
        cont++
    }
}
console.log("numeros mayores a 100: "+cont)
console.log("la suma: "+suma)