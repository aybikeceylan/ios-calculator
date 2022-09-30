const btn = document.querySelector(".box")
const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")
const btnArea = document.querySelector(".buttons")
let counter = 0;
previousList = []
resultList = []
let result;

btnArea.addEventListener("click", (e) => {


    if (e.target.classList.contains("box-num")) {

        current.innerHTML += e.target.innerHTML

    }


    if ((current.innerHTML !== "") && (e.target.classList.contains("box-calc"))) {

        previousList.push(`${current.innerText}`)
        //ilk yazılan sayıyı array da tuttum

        current.innerHTML += e.target.innerHTML
        previousList.push(`${e.target.innerText}`)
        // operatörü array de tuttum

        previous.innerHTML = current.innerHTML
        current.innerHTML = ""
        //previous ekrana sayı ve operatör yazıldı current temizlendi

    }
    if (e.target.classList.contains("box-eq")) {
        previousList.push(`${current.innerText}`)
        console.log(previousList);
        //eşittir e basılmadan önce current ta olan sayıyı array e pushladım
        // console.log(previousList[0], typeof (previousList[0]));
        // console.log(previousList[1], typeof (previousList[1]));
        // console.log(previousList[2], typeof (previousList[2]));
        // opeartörleri tanımladım
        if (previousList[1] == "+") {
            result = +previousList[0] + +previousList[2]
            console.log(result)
        } else if (previousList[1] == "-") {
            result = previousList[0] - previousList[2]
            console.log(result)
        } else if (previousList[1] == "x") {
            result = previousList[0] * previousList[2]
            console.log(result)
        } else if (previousList[1] == "÷") {
            result = previousList[0] / previousList[2]
            console.log(result)
        } else if (previousList[1] == "%") {
            result = +previousList[0] % +previousList[2]
            console.log(result)
        }
        //işlem bitince ekrana sonucu yazdırdım.previousu temizledim. array i temizledim.
        // console.log(previous.innerHTML)
        current.innerHTML = ""
        previous.innerHTML = result
        // console.log(previous.innerHTML)
        // console.log(current.innerHTML)
        // console.log(previousList);
        previousList = []
        resultList.push(`${result}`)
        console.log(resultList);

    }

    if ((resultList.length > 0) && (e.target.classList.contains("box-calc"))) {
        // eğer ekranda sonuç varken yeni işlem yapılacaksa sonucu arraye pushladım.operatörü aldım.arraye attım
        previous.innerHTML = resultList[0]

        previousList.push(resultList[0])
        resultList = []

        previous.innerHTML += e.target.innerHTML
        previousList.push(`${e.target.innerText}`)

    }
    if (e.target.classList.contains("box-AC")) {
        previous.innerHTML = ""
        current.innerHTML = ""
        previousList = []
        resultList = []
    }
    if (e.target.classList.contains("box-dot")) {
        if (current.innerHTML = ".") {
            current.innerHTML = "0."
        } else {
            current.innerHTML += "."
        }
    }


})


