function myFunction() {
    var numero = prompt("introduce un numero")
    var num = 0
    switch (numero) {
        case 1:
            alert(6)
            break;
        case 2:
            num = "5"
            break;
        case 3:
            num= 4
            break;
        case 4:
            num = "3"
            break;
        case 5:
            num  = "2"
            break;
        case 6:
            num = "1"
            break;
    
        default:
            break;
    }
    
        document.getElementById("demo").innerHTML = "cara contraria:" + num ;
        alert(num)
    
}