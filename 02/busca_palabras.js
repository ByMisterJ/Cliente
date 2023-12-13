var arrstr = ["paco","coche","fiesta","si"]

esta(arrstr)

function esta(arrstr) {
    var str = prompt("que palabra buscas?")
    var ta = false

    for (let i = 0; i < arrstr.length; i++) {
        if(str == arrstr[i]){
            var ta = true
        }
    }
    if(ta==true){
        console.log("si que esta la palabra: "+str)
    }else console.log(str+" no consta")
}