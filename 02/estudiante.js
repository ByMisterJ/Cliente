const estudiante={
    nombre:"paco",
    apellidos:"Sanchez Terreira",
    dni:"65432187J",
    edad:24,
    altura:1.74,
    estudios:"Ingenieria termo-nuclear",
    mostrar(){
        document.writeln("Nombre: "+this.nombre)
        document.writeln("<br>Apellidos: "+this.apellidos)
        document.writeln("<br>DNI: "+this.dni)
        document.writeln("<br>Edad: "+this.edad)
        document.writeln("<br>Altura: "+this.altura)
        document.writeln("<br>Estudios: "+this.estudios)
    },
    descripcion(){
        document.write("El usuario: "+this.nombre+" tiene "+this.edad+" años y mide "+this.altura+" cm y es "+this.estudios)
    }
}