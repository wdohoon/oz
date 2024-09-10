const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const draw = document.querySelector("#draw")
const reset = document.querySelector("#reset")

let lottoNumbers = []

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("each")

    if (number >= 1 && number <= 10) {
        eachNumDiv.classList.add("range1");
    } else if (number >= 11 && number <= 20) {
        eachNumDiv.classList.add("range2");
    } else if (number >= 21 && number <= 30) {
        eachNumDiv.classList.add("range3");
    } else if (number >= 31 && number <= 40) {
        eachNumDiv.classList.add("range4");
    } else if (number >= 41 && number <= 45) {
        eachNumDiv.classList.add("range5");
    }

    eachNumDiv.textContent = number
    numbersDiv.append(eachNumDiv)
}

draw.addEventListener("click", () => {
    lottoNumbers = []
    numbersDiv.innerHTML = ""

    while(lottoNumbers.length < 6) {
        let rn = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn)
            paintNumber(rn)
        }
    }
})

reset.addEventListener("click", () => {
    lottoNumbers.splice(0, lottoNumbers.length)
    numbersDiv.innerHTML = ""
})