const btn = document.querySelector(".box")
const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")
const btnArea = document.querySelector(".buttons")

calc = JSON.parse(localStorage.getItem("calc")) || []

btnArea.addEventListener("click", (e) => {
    if (e.target.classList.contains("box-num")) {

    }

})



// console.log(e.target.innerHTML);
// if (e.target.classList.contains("box-num")) {
//     console.log(true)
//     current.innerHTML = e.target.innerHTML
//     isFilled = "true"
//     btnArea.addEventListener("click", (k) => {
//         if (isFilled && k.target.classList.contains("box-num")) {
//             current.innerHTML += k.target.innerHTML
//         }
//     })
// }