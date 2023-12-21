function cambiarImagen() {
    var imagen = document.getElementById('carch');
    if (imagen.src.endsWith('car1.jpeg')) {
        imagen.src = 'car2.jpeg';
    } else imagen.src = 'car1.jpeg';
}