 var cinco=5

function sumarnumeros(numero1,numero2){
    var resultado = numero1 +numero2
    console.log('La suma es '+resultado)
}

sumarnumeros(cinco,2)
sumarnumeros(cinco,cinco)
sumarnumeros(2,2)

var dos=2

function sumarnumero(numero1=8,numero2=8){
    var resultado = numero1 +numero2
    console.log('La suma es '+resultado)
}

sumarnumero(4)
sumarnumero(5,5)
sumarnumero()