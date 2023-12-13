
calcprodescalar()

function calcprodescalar() {
    alert("introduzca 3 numeros para el primer vector")
    var vector1 = [parseInt(prompt()),parseInt(prompt()),parseInt(prompt())]
    alert("introduzca 3 numeros para el segundo vector")
    var vector2 = [parseInt(prompt()),parseInt(prompt()),parseInt(prompt())]

    var producto = (vector1[0]+vector2[0])+(vector1[1]+vector2[1])+(vector1[2]+vector2[2])
    console.log(producto)
}