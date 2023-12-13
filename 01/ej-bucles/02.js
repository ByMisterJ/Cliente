var A = parseInt(prompt("introduce el primer numero"))
var B = parseInt(prompt("introduce el segundo numero"))

if(B>A){
    for (let i = 0; i < B; i++) {
        if(i%2!=0 && i>A){
            console.log(i)
        }
    }
}