
const display = document.getElementById("display");

const media = document.getElementById("media")

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try{
        display.value = eval(display.value)
        if (display.value == "1488"){
            display.value = "1488 ооооо посхалко"
            media.play()
        }
        if (display.value == "Infinity"){
            display.value = "сын шлюхи"
        }
    } catch (err) {
        display.value = "ебать ты попуск"
    }
}   