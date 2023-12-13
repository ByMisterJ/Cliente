const libro={
    titulo:"Metro2033",
    paginas:544,
    autor:"Dimitry",
    precio:19.99,
    isbn:8448005007,
    desc(){
        console.log("titulo: "+this.titulo+", autor: "+this.autor+", paginas: "+this.paginas)
    }
}
console.log(libro.titulo)
console.log(libro.paginas)
console.log(libro.autor)
console.log(libro.precio)
console.log(libro.isbn)

libro.desc()
libro.precio=20
console.log(libro.precio)

