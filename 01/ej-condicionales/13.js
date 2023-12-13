let horas = prompt("Introduce las horas")
let mins = prompt("Introduce los minutos")
let secs = prompt("Introduce los segundos")

horas = parseInt(horas)
mins = parseInt(mins)
secs = parseInt(secs)

if(secs===59){
    secs=0
    if(mins===59){
        mins=0
        if(horas===23){
            horas=0
        }else{
            horas++
        }
    }else{
        mins++
    }
}else{
    secs++
}
console.log(horas+":"+mins+":"+secs)