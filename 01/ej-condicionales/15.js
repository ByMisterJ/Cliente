var dias = 30
var mes = prompt("que mes es?")
var ano = prompt("que año es?")

if((mes%2!=0 && mes<=7) || (mes%2==0 && mes>=8)){
    dias=31
}
if(mes==2){
    dias=28
    if (ano%4==0){dias=29}
}

document.write("ese mes tiene: "+dias)