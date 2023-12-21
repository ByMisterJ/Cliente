function cambiarTema() {
    var texto =document.getElementById('eltexto')
    if(texto.style.color=='red'){
        texto.style.color='black'
        texto.style.fontSize='16px'
    }else{
        texto.style.color='red'
        texto.style.fontSize='120px'
    }
}