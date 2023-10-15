console.log('connected')

// const sevenButton = document.querySelector('.seven')

// sevenButton.addEventListener('click', () => {
//     // console.log("clicked!")
   
// }) 

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
            // const node = document.createTextNode(number.innerText);
            // displayScreen.appendChild(node)    
            displayScreen.innerText = number.innerText
            // build onto mathExpression
            window.mathExpression += number.innerText
        })
    }

// make the math math!
// if/else if operator === X then function etc

//grab all operator buttons
let buttonOperators = document.querySelectorAll(".operators")
//getting their inner text value and logging a string - set up to later add operational function
for (let operators of buttonOperators) {
    operators.addEventListener('click', (event) => {
        if (operators.innerText === 'X') {
            console.log("multiply")
            //holding number then multiplication function then holding new number to let later solve
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
            // clear our window.mathExpression and display screen
            
            // put solveEquation into displayScreen
            displayScreen.innerText = solveEquation
        } 
    })

}

//use a for loop to do ^^ for equals button? 

