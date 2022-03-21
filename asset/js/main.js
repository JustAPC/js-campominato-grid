let grid = document.getElementById("grid");

for (let i = 1; i <= 100; i++) {
    let box = document.createElement("div");
    box.classList.add("box", "d-flex","text-center","align-items-center","justify-content-center", "fw-bold")
    grid.appendChild(box)
    box.innerHTML = i

    box.addEventListener ('click', function (){
        this.classList.add('clicked')
    })

}