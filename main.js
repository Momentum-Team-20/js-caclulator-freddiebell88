// console.log('connected')

//grab all button elements
const buttons = document.querySelectorAll('.button')
console.log(buttons)

let displayScreen = document.querySelector('#display');

let startingOver = false

let mathExpression = '';


let allNumberButtons = document.querySelectorAll('.number');
    console.log(allNumberButtons)
    for (let number of allNumberButtons) {
        number.addEventListener('click', () => {   
            if (startingOver) {
                resetEquation()
                startingOver = false
                console.log("after reset", startingOver)
            } 
            displayScreen.innerText += number.innerText
            // build onto mathExpression
            mathExpression += number.innerText
        })
    }


//grab all operator buttons
let buttonOperators = document.querySelectorAll(".operators")
//getting their inner text value and logging a string - set up to later add operational function
for (let operators of buttonOperators) {
    operators.addEventListener('click', (event) => {
        if (operators.innerText === 'X') {
            console.log("multiply")
            //holding number then multiplication function then holding new number to let later solve in a string variable
            mathExpression += '*'
            
        } else if (operators.innerText === '/') {
            console.log("divide")
            mathExpression += '/'
        } else if (operators.innerText === '-') {
            console.log("subtract")
            mathExpression += '-'
        } else if (operators.innerText === '+') {
            console.log("add")
            mathExpression += '+'
        } else if (operators.innerText === '=') {
            console.log("equals")
            let solveEquation = eval(mathExpression)
            console.log(solveEquation)
            // puts solveEquation into displayScreen
            displayScreen.innerText = solveEquation
            startingOver = true
            console.log("This is the value of starting over", startingOver)
            //attempts to reset equation
            // let newEquation = document.querySelectorAll('.number');
            // console.log(newEquation)
            // for (let number of newEquation)
            // number.addEventListener('click', () => {
            //     console.log("clear")
                // let element = document.getElementById("display");
                // element.innerText = number.innerText;
                // mathExpression = "";
                // })
        } 
    })
}
// while diplayScreen.innerText = solveEquation listen for number click then reset mathExpression to null?

//clicking clear button will clear display screen
clear.addEventListener('click', () => { 
    resetEquation()
})

function resetEquation() {
    let element = document.getElementById("display");
    element.innerText = "";
    mathExpression = "";
}
