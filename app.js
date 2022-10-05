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


    if ((current.innerHTML !== "") && (e.target.classList.contains("box-calc")) && (counter == 0)) {

        previousList.push(`${current.innerText}`)
        //ilk yazılan sayıyı array da tuttum

        current.innerHTML += e.target.innerHTML
        previousList.push(`${e.target.innerText}`)
        // operatörü array de tuttum

        previous.innerHTML = current.innerHTML
        current.innerHTML = ""
        //previous ekrana sayı ve operatör yazıldı current temizlendi
        counter++
        console.log(counter)
    }
    if ((e.target.classList.contains("box-calc")) && (counter > 0) && (current.innerHTML !== "")) {
        console.log(e.target.innerHTML);

        previousList.push(`${current.innerText}`)
        console.log(previousList);
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
        current.innerHTML = ""
        result2 = result.toString()
        console.log(result)
        if (result2.includes(".")) {
            previous.innerHTML = `${result.toFixed(2)}${e.target.innerHTML}`
            console.log(result)

        } else {
            previous.innerHTML = `${result}${e.target.innerHTML}`
            console.log(result)
        }
        previousList = []
        resultList.push(`${result}`)
        console.log(resultList);
        if (e.target.innerHTML == "+") {
            previousList.push(result)
            previousList.push(e.target.innerHTML)
            console.log(result)
            resultList = []
            console.log(resultList);
            console.log(previousList);
            counter++

        } else if (e.target.innerHTML == "-") {
            previousList.push(result)
            previousList.push(e.target.innerHTML)
            console.log(result)
            resultList = []
            console.log(resultList);
            console.log(previousList);
            counter++
        } else if (e.target.innerHTML == "x") {
            previousList.push(result)
            previousList.push(e.target.innerHTML)
            console.log(result)
            resultList = []
            console.log(resultList);
            console.log(previousList);
            counter++
        } else if (e.target.innerHTML == "÷") {
            previousList.push(result)
            previousList.push(e.target.innerHTML)
            console.log(result)
            resultList = []
            console.log(resultList);
            console.log(previousList);
            counter++
        } else if (e.target.innerHTML == "%") {
            previousList.push(result)
            previousList.push(e.target.innerHTML)
            console.log(result)
            resultList = []
            console.log(resultList);
            console.log(previousList);
            counter++
        }


    }
    if ((e.target.classList.contains("box-calc")) && (current.innerHTML == "") && (previousList[1] !== e.target.innerHTML) && (previousList[1] !== "")) {
        previousList.pop()
        console.log(previousList);
        previousList.push(e.target.innerHTML)
        previous.innerHTML = `${previousList[0]}${previousList[1]}`
    }


    if (e.target.classList.contains("box-eq")) {
        previousList.push(`${current.innerText}`)
        console.log(previousList);
        //eşittir e basılmadan önce current ta olan sayıyı array e pushladım

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

        current.innerHTML = ""
        result2 = result.toString()
        console.log(result)
        if (result2.includes(".")) {
            previous.innerHTML = result.toFixed(2)
            console.log(result)

        } else {
            previous.innerHTML = result
            console.log(result)
        }
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
        console.log(current.innerHTML);
        if (current.innerHTML != "") {
            console.log(current.innerHTML);
            current.innerHTML += e.target.innerHTML
            console.log(current.innerHTML);

        } else {
            console.log(current.innerHTML);
            current.innerHTML = "0" + e.target.innerHTML
            console.log(current.innerHTML);
        }
    }

    if ((e.target.classList.contains("box-ae")) && (current.innerHTML !== "")) {
        current.innerHTML = 0 - current.innerHTML
        console.log(1);
    } else if ((e.target.classList.contains("box-ae")) && (current.innerHTML == "") && (previous.innerHTML !== "") && (resultList.length == 0)) {
        current.innerHTML = 0 - previousList[0]
        previous.innerHTML = ""
        previousList = []
        console.log(2);
    } else if ((e.target.classList.contains("box-ae")) && (current.innerHTML == "") && (resultList.length > 0)) {
        current.innerHTML = 0 - resultList[0]
        previous.innerHTML = ""
        resultList = []
        console.log(3);
    }

})


