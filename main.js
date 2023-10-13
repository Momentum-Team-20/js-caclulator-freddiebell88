console.log('connected')

const sevenButton = document.querySelector('.seven')

sevenButton.addEventListener('click', () => {
    // console.log("clicked!")
   
}) 

//grab all button elements
const buttons = document.querySelectorAll('.button')
console.log(buttons)

let displayScreen = document.querySelector('#display');
//when button is clicked log clicked
for (let button of buttons) {
    button.addEventListener('click', () => {
    console.log("clicked!")
    console.log(button.innerText)
    const node = document.createTextNode(button.innerText);
    displayScreen.appendChild(node);
})
//attempting! to get clicked button to appear in display

// displayScreen.innerText = button.innerText
}