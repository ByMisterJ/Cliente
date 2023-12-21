function cambiarFotos() {
    var imagen = document.getElementById('foto');
    if (imagen.src.endsWith('car1.jpeg')) {
        imagen.src = 'car2.jpeg';
    }else if(imagen.src.endsWith('car2.jpeg')){
        imagen.src = 'car3.jpeg';
    }else if(imagen.src.endsWith('car3.jpeg')){
        imagen.src = 'car4.jpeg';
    }else if(imagen.src.endsWith('car4.jpeg')){
        imagen.src = 'car1.jpeg';
    } 
}