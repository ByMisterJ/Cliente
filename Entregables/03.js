var x=9
var y=5
var z=x!==y //comparacion valores dara true
console.log("x="+x+", y="+y+", z="+z)

var x="hola"
var y="hola"
var z=x===y //comparacion valores dara true
console.log("x="+x+", y="+y+", z="+z)

var x="hola"
var y="hola"
var z=x!==y //comparacion valores dara false
console.log("x="+x+", y="+y+", z="+z)

var x="libro"
var y="hola"
var z=x===y //comparacion valores dara false
console.log("x="+x+", y="+y+", z="+z)

var x="libro"
var y="hola"
var z=x!==y //comparacion valores dara true
console.log("x="+x+", y="+y+", z="+z)

var x=5
var y="5"
var z=x===y //comparacion valores dara false pues esta comparando 
console.log("x="+x+", y="+y+", z="+z) //el tipo de dato tambien

var x=5
var y="5"
var z=x!==y //comparacion valores dara true
console.log("x="+x+", y="+y+", z="+z)