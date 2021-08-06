const  balloons = document.querySelectorAll(".balloon")
const noBal = document.querySelectorAll(".no-bal")
const  cls = document.querySelector(".bx")

let index = 0

cls.addEventListener("click", () =>{
    noBal.forEach(el => {
        el.src ="./img/no.gif"
    })
    index = 0
})


balloons.forEach( el => {
    el.addEventListener("click" , () =>{
        noBal[index++].src = el.src
    })
    el.addEventListener("click", () =>{
        noBal.src = el.src
    })
})



noBal.forEach(el => {
    el.addEventListener("click", () =>{
        el.src = "./img/no.gif"
    })
})