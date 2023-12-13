var opcion = prompt("0: cuadrado \n1: rectangulo \n2: triangulo")

if(opcion==0){
    var lado = prompt("introduce el lado")

    var superficie = lado * lado
    
    var perimetro = lado * 4
    
    console.log("superficie : " + superficie)
    console.log("perimetro : " + perimetro)
}
if(opcion==1){
    var base = prompt("introduce la base del rectangulo")
    var altura = prompt("introduce la altura del rectangulo")
    
    var superficie = base * altura
    var perimetro = (base * 2) + (altura *2)
    
    console.log("superficie : " + superficie)
    console.log("perimetro : " + perimetro)
}
if(opcion==2){
    var base = prompt("introduce la base del triangulo")
    var altura = prompt("introduce la altura del triangulo")
    
    base = parseInt(base)
    altura = parseInt(altura)
    
    var superficie = base * altura /2
    
    console.log("superficie : " + superficie)
}
if(opcion!=0&&opcion!=1&&opcion!=2){
    console.error("Ha habido un error")
}