let grid = document.getElementById("grid");

let btn = document.getElementById("bottone");

btn.addEventListener ('click', function (){
    console.log(document.getElementById("difficulty").value);
})

let numeroBox = 100;

generatoreBox (numeroBox)








function generatoreBox (numeroBox) {
    for (let i = 1; i <= numeroBox; i++) {
        let box = document.createElement("div");
        box.classList.add("box", "d-flex","text-center","align-items-center","justify-content-center", "fw-bold")
        grid.appendChild(box)
        box.innerHTML = i
    
        box.addEventListener ('click', function (){
            this.classList.add('clicked')
        })
    
    }
}