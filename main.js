console.log('connected')

//grab all button elements
const buttons = document.querySelectorAll('.button')
console.log(buttons)

let displayScreen = document.querySelector('#display');
//when button is clicked log clicked
for (let button of buttons) {
    button.addEventListener('click', () => {
    // console.log("clicked!")
    console.log(button.innerText)
    //attempting! to get clicked button to appear in display
    // const node = document.createTextNode(button.innerText);
    // displayScreen.appendChild(node);
})
}

window.mathExpression = '';


let allNumberButtons = document.querySelectorAll('.number');
    console.log(allNumberButtons)
    for (let number of allNumberButtons) {
        number.addEventListener('click', () => {   
            displayScreen.innerText += number.innerText
            // build onto mathExpression
            window.mathExpression += number.innerText
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
            window.mathExpression += '*'
            
        } else if (operators.innerText === '/') {
            console.log("divide")
            window.mathExpression += '/'
        } else if (operators.innerText === '-') {
            console.log("subtract")
            window.mathExpression += '-'
        } else if (operators.innerText === '+') {
            console.log("add")
            window.mathExpression += '+'
        } else if (operators.innerText === '=') {
            console.log("equals")
            let solveEquation = eval(window.mathExpression)
            console.log(solveEquation)
            // puts solveEquation into displayScreen
            displayScreen.innerText = solveEquation
            //attempts to reset equation
        } 
    })
}
// while diplayScreen.innerText = solveEquation listen for number click then reset mathExpression to null?

//clicking clear button will clear display screen
clear.addEventListener('click', () => {
    console.log("clear screen")
    let element = document.getElementById("display");
    element.innerText = "";
    window.mathExpression = "";
    })
