
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate(){
    try {
    display.value = eval(display.value); ///eval function takes an expression, evaluates it and gives a result
} 
    catch(error) {
        display.value = "Error"
}

}
