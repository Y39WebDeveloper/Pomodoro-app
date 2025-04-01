let time = document.getElementById("time")
let circle = document.getElementById("circle")

const pomodoro = document.getElementById("pomodoro")
const shortBreak = document.getElementById("shortBreak")
const longBreak = document.getElementById("longBreak")

const applyBtn = document.getElementById("applyBtn")

const categories = document.querySelectorAll(".nav li")
// let minutes = pomodoro.value
let seconds = 0

let currentFont = "'Kumbh Sans', sans-serif"
let currentColor = "#F87070"

let theme = document.querySelector(":root")
theme.style.setProperty('--theme', currentColor)


circle.style.strokeDasharray = 1070;

setTimer(pomodoro.value,seconds,unit = seconds + (60*(pomodoro.value)))

function setTimer(minutes,seconds,unit){
    theme.style.setProperty('--theme', currentColor)
    document.body.style.fontFamily = currentFont
    circle.style.strokeDashoffset = 0;
    time.innerHTML =
    `
${minutes>9 ? minutes : `0${minutes}`}:${seconds>9 ? seconds : `0${seconds}`}
`
let inter = setInterval(()=>{
    // console.log("minute", minutes)
    // console.log("secend", seconds)
    if(seconds<=0){
        seconds=59;
        minutes--;
    }else{
        seconds--;
    }
    time.innerHTML =
    `
    ${minutes>9 ? minutes : `0${minutes}`}:${seconds>9 ? seconds : `0${seconds}`}
    `
    if(minutes<0){
        time.innerHTML = "00:00"
        circle.style.strokeDashoffset = circle.style.strokeDasharray
        clearInterval(inter)
    }else{
        circle.style.strokeDashoffset = (parseFloat(circle.style.strokeDashoffset)) + (parseFloat(circle.style.strokeDasharray)/unit)
    }
}, 1000)
applyBtn.addEventListener("click", () => {
    clearInterval(inter)
})
categories.forEach(category => {
    category.addEventListener("click", ()=>{
        clearInterval(inter)
    })
})
}

const settingsContainer = document.getElementById("settingsContainer")
const closeSettings = document.getElementById("closeSettings")
const settingsIcon = document.getElementById("settingsIcon")

settingsIcon.addEventListener("click", () => {
    settingsContainer.classList.add("active");
})
closeSettings.addEventListener("click", () => {
    settingsContainer.classList.remove("active");
})

const fonts = document.querySelectorAll("#fonts li")
const colors = document.querySelectorAll("#colors li")

fonts.forEach(font => {
    font.addEventListener("click", (e)=>{
        fonts.forEach(font => font.classList.remove("active"))
        font.classList.add("active")
        currentFont = font.style.fontFamily
    })
})
colors.forEach(color => {
    color.addEventListener("click", (e)=>{
        colors.forEach(color => color.classList.remove("active"))
        color.classList.add("active")
        currentColor = color.style.backgroundColor
    })
})
colors.forEach(color => {
    color.addEventListener("click", (e)=>{
        colors.forEach(color => color.classList.remove("active"))
        color.classList.add("active")
    })
})
applyBtn.addEventListener("click", () => {
    setTimer(pomodoro.value,seconds,unit = seconds + (60*(pomodoro.value)))
    settingsContainer.classList.remove("active");
    categories.forEach(category => category.classList.remove("active"))
    categories[0].classList.add("active")
})

categories.forEach(category => {
    category.addEventListener("click", ()=>{
        categories.forEach(category => category.classList.remove("active"))
        category.classList.add("active")
    })
})
categories[0].addEventListener("click", () => {
    setTimer(pomodoro.value,seconds=0,unit = seconds + (60*(pomodoro.value)))
})
categories[1].addEventListener("click", () => {
    setTimer(shortBreak.value,seconds=0,unit = seconds + (60*(shortBreak.value)))
})
categories[2].addEventListener("click", () => {
    setTimer(longBreak.value,seconds=0,unit = seconds + (60*(longBreak.value)))
})