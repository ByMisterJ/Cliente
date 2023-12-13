var conv = prompt("D: pasar de euros a dolares \nE: pasar de dolares a euros")

if(conv=="D"){
    var euros = prompt("introduce la cantidad de euros")
    var dolares = euros * 1.1
    console.log("dolares: "+dolares)
}
if(conv=="E"){
    var dolares = prompt("introduce la cantidad de dolares")
    var euros = dolares * 0.91
    console.log("euros: "+euros)
}