const balloons = document.querySelectorAll(".balloon")
const noBal = document.querySelectorAll(".no-bal")
const refresh = document.querySelector(".bx-refresh")

let index = 0

refresh.addEventListener("click", () => {
    noBal.forEach((el) => {
        el.src = "./img/no.gif"
        index = 0
    })
})


balloons.forEach(el => {
    el.addEventListener("click", () => {
        if (index < 7) {
            noBal[index].src = el.src
            index++
        }
    })
})


noBal.forEach((el) => {
    el.addEventListener("click", () => {
        el.src = "./img/no.gif"
    })
})

