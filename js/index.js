const panels=document.querySelectorAll(".panel");
const len=panels.length;

panels.forEach(panel=>{
    panel.addEventListener("click",event=>{
        activePanel(panel);
    })
    panel.addEventListener("keydown",event =>{
        if(event.key === "ArrowRight"){
            navigateNext();
        }
        else if(event.key ==="ArrowLeft"){
            navigatePrev();
        }
    })
})

function navigateNext() {
    const currentIndex = Array.from(panels).findIndex(p => p.classList.contains("active"));
    const requiredIndex = (currentIndex + 1) % len;
    activePanel(panels[requiredIndex]);
}

function navigatePrev() {
    const currentIndex = Array.from(panels).findIndex(p => p.classList.contains("active"));
    const requiredIndex = (currentIndex - 1 + len) % len;
    activePanel(panels[requiredIndex]);
}

function deslect(){
    panels.forEach(panel=>{
        panel.classList.remove("active");
    })
}

function activePanel(p){
    deslect();
    p.classList.add("active");
    p.focus();
}
