const btn = document.querySelector(".box")
const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")
const btnArea = document.querySelector(".buttons")
let counter = 0;
previousList = []
resultList = []
let result;

btnArea.addEventListener("click", (e) => {

    console.log(e.target.innerHTML);
    if (e.target.classList.contains("box-num") && counter < 6) {

        current.innerHTML += e.target.innerHTML
        counter++

    }


    if (e.target.classList.contains("box-calc")) {

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
        console.log(previousList[0], typeof (previousList[0]));
        console.log(previousList[1], typeof (previousList[1]));
        console.log(previousList[2], typeof (previousList[2]));
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
        console.log(previous.innerHTML)
        current.innerHTML = ""
        previous.innerHTML = result
        console.log(previous.innerHTML)
        console.log(current.innerHTML)
        console.log(previousList);
        previousList = []
        // resultList.push(`${result}`),
        //     console.log(resultList);

    }
    if ((resultList != []) && (e.target.classList.contains("box-calc"))) {
        // eğer ekranda sonuç varken yeni işlem yapılacaksa sonucu arraye pushladım.operatörü aldım.arraye attım
        console.log(previous.innerHTML);
        console.log(previousList);
        previous.innerHTML = resultList[0]
        console.log(resultList);
        previousList.push(resultList[0])
        previous.innerHTML += e.target.innerHTML
        previousList.push(`${e.target.innerText}`)

        //previous ekrana sayı ve operatör yazıldı current temizlendi
        previous.innerHTML = current.innerHTML
        current.innerHTML = ""



    }


})


