const focuss = {
    modelo : "focus",
    marca : "ford",
    color : "rojo",
    anyo : 2012,
    focusing() {
        console.log("very focused")
    }
}

focuss.focusing
delete focuss.color
console.log(focuss.color)