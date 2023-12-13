var arrcant = [1,2,3,4,1,2,3,1,2,1]

veces(arrcant)

function veces (arrcant){
    var ask = prompt("que numero buscas")
    var numveces = 0
    for (let i = 0; i < arrcant.length; i++) {
        if(ask == arrcant[i]){
            numveces++
        }
        
    }
    console.log("se repite: "+numveces+" veces")
}