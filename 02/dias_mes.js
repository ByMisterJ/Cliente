var dias = 30
var mes = prompt("que mes es?")

if((mes%2!=0 && mes<=7) || (mes%2==0 && mes>=8)){
    dias=31
}
if(mes==2){
    dias=28
}

document.write("ese mes tiene: "+dias)