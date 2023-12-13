var radio = parseFloat(prompt("radio: "))
var altura = parseFloat(prompt("altura: "))

calcVolumen(radio,altura)

function calcVolumen(radio,altura) {
    volumen = (Math.PI * (radio*radio) * altura) /3
    console.log(volumen)
}


//atl simple//
/*
var base = parseFloat(prompt("base: "))
var altura = parseFloat(prompt("altura: "))

function calcVolumenSimple(base,altura) {
    volumen = (base * altura) /3
}
*/