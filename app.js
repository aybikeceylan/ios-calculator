const btn = document.querySelector(".box")
const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")
const btnArea = document.querySelector(".buttons")
let counter = 0;

btnArea.addEventListener("click", (e) => {

    console.log(e.target.innerHTML);
    if (e.target.classList.contains("box-num") && counter < 6) {
        console.log(true)
        current.innerHTML += e.target.innerHTML
        counter++
    }
    if (e.target.classList.contains("box-calc")) {
        current.innerHTML += e.target.innerHTML
        console.log(current)
        previous.innerHTML = current.innerHTML
        current.innerHTML = ""
        if (e.target.classList.contains)
    }


})


