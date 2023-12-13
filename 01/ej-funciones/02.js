alert("Introduce los numeros en las matrices")

alert("Matriz 1 (2x3)")
m1 = [
    [prompt("(1x1)"),prompt("(1x2)"),prompt("(1x3)")],
    [prompt("(2x1)"),prompt("(2x2)"),prompt("(2x3)")]
]

alert("Matriz 1 (3x2)")
m2 = [
    [prompt("(1x1)"),prompt("(1x2)")],
    [prompt("(2x1)"),prompt("(2x2)")],
    [prompt("(3x1)"),prompt("(3x2)")]
]

    var fil_m1 = m1.length
    var col_m1 = m1[0].length

    var fil_m2 = m2.length
    var col_m2 = m2[0].length

    var multiplicacion = new Array(fil_m1)
    for (x=0; x<multiplicacion.length;x++){
        multiplicacion[x] = new Array(col_m2).fill(0)
    }

    for (x=0; x < multiplicacion.length; x++) {
        for (y=0; y < multiplicacion[x].length; y++) {                                
            for (z=0; z<col_m1; z++) {
                multiplicacion [x][y] = multiplicacion [x][y] + m1[x][z]*m2[z][y] 
            }
        }
    }

    console.log(m1)
    console.log(m2)
    console.log(multiplicacion)
