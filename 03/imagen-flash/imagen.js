function no_se_ve() {
    var imagen = document.getElementById('carch')
    if (imagen.src.endsWith('flash.jpeg')) {
        imagen.style.display="none"
    } else imagen.src = 'flash.jpeg'
}

function se_ve() {
    var imagen = document.getElementById('carch')
    if (imagen.src.endsWith('flash.jpeg')) {
        imagen.style.display="block"
    } else imagen.src = 'flash.jpeg'
}

function se_ve_ma() {
    var imagen = document.getElementById('carch')
    if (imagen.src.endsWith('flash.jpeg')) {
        imagen.style.width="375px"
        imagen.style.height="283px"
    } else imagen.src = 'flash.jpeg'
}

function se_ve_me_no() {
    var imagen = document.getElementById('carch')
    if (imagen.src.endsWith('flash.jpeg')) {
        imagen.style.width="275px"
        imagen.style.height="183px"
    } else imagen.src = 'flash.jpeg'
}