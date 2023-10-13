console.log('connected')

// const sevenButton = document.querySelector('.seven')

// sevenButton.addEventListener('click', () => {
//     // console.log("clicked!")
   
// }) 

//grab all button elements
const buttons = document.querySelectorAll('.button')
console.log(buttons)

// let displayScreen = document.querySelector('#display');
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

let currentNumber = document.querySelectorAll('.number');
    console.log(currentNumber)
    for (let number of currentNumber) {
        number.addEventListener('click', () => {
            const node = document.createTextNode(number.innerText);
            displayScreen.appendChild(node)    
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
        } else if (operators.innerText === '/') {
            console.log("divide")
        } else if (operators.innerText === '-') {
            console.log("subtract")
        } else if (operators.innerText === '+') {
            console.log("add")
        } 
    })

}

//use a for loop to do ^^ for equals button? 

