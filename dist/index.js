const panels=document.querySelectorAll(".panel");

panels.forEach(panel=>{
    panel.addEventListener("click",event=>{
        deslect();
        panel.classList.add("active")
    })
})

function deslect(){
    panels.forEach(panel=>{
        panel.classList.remove("active");
    })
}
