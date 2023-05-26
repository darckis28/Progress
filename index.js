const progress = document.getElementById("progress"),
back = document.getElementById("back"),
next = document.getElementById("next"),
circles = document.querySelectorAll(".circle");
let conteo=1;

next.addEventListener("click",()=>{
    conteo++
    if(conteo > circles.length){
        conteo=circles.length
    }
    update();
});
back.addEventListener("click",()=>{
    conteo--
    if(conteo < 1){
        conteo=1;
    }
    update();
});
const update=()=>{
    circles.forEach((circle,id)=>{
        if(id <conteo){
            circle.classList.add("active")
        }else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if(conteo === 1) {
        back.disabled = true
    } else if(conteo === circles.length) {
        next.disabled = true
    } else {
        back.disabled = false
        next.disabled = false
    }
}