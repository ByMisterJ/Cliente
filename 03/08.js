function cambiarFondo() {
    var fondo =document.getElementById('body')
    if(fondo.style.backgroundColor=='white'){
        fondo.style.backgroundColor='blue'
    }else if(fondo.style.backgroundColor=='green'){
        fondo.style.backgroundColor='white'
    }else if(fondo.style.backgroundColor=='red'){
        fondo.style.backgroundColor='green'
    }else if(fondo.style.backgroundColor=='blue'){
        fondo.style.backgroundColor='red'
    }
}