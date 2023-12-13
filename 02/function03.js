var valor="global"

function funcionlocal(){
    var valor="local"
    return valor
    //dentro de una funcion var no cambiara fuera//
}

console.log(valor)
console.log(funcionlocal())
console.log(valor)