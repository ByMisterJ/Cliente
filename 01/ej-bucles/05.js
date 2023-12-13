const allnum = []
var negativo = 0 
var media = 0
negativo = parseInt(negativo)
media = parseInt(media)
do{
var num = parseInt(prompt("introduce un numero entero"))
if (num>0) {
    allnum.push(num)
}else negativo = 1
}while(negativo<1)

allnum.forEach(function(a){media += a})

console.log(allnum)
console.log(media)
