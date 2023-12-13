var articulo = parseFloat(prompt("introduce el precio"))

var iva = articulo * (21/100)
console.log(iva.toFixed(2))

var total = articulo + iva
console.log(total.toFixed(2))