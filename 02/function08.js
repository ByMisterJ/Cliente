var celsius = prompt("grados: ")

console.log(cambioGrados(celsius))

function cambioGrados(celsius){

    var farenhait = parseFloat((celsius * 9 / 5) + 32)

    return farenhait
}
