// const heading2 = document.querySelector('h2')
// const btn = document.querySelector('.check')
//heading2.innerText = 'jasper'
// function nameChanger (){
//  heading2.innerText ==='GUESS MY NUMBER' ? heading2.innerText = 'jasper':heading2.innerText = 'GUESS MY NUMBER'
// let randomNumber = Matgh.ceil(Math.random()*10)
// number.textContent = randomNumber
// }

//  btn.addEventListener('click',nameChanger)
///Handling input field
//in inputField to get data you need to pass a .value
// let inputField = document.querySelector(".guess")
// inputField.value = 20
// console.log( typeof Number (inputField.value));
const heading2 = document.querySelector('h2')
const btn = document.querySelector('.check')
// const number = document.querySelector('.number')
function logic() {
    let guessedNumber = Math.ceil(Math.random() * 6)
    const message = document.querySelector('.message')
    const number = document.querySelector('.number')

    let body = document.body.style
    number.textContent = guessedNumber
    let score = document.querySelector('.score')
    let guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        message.textContent = 'no number'
    } else if (guess === guessedNumber) {
        message.textContent = 'Winner'
        body.backgroundColor = 'rgb(19, 34, 19)'
    } else if (guess !== guessedNumber) {
        message.textContent = 'looser'
        body.backgroundColor = 'rgb(194, 224, 133)'
        if (score.textContent == 0) {
            score.textContent = 0
        } else {
            score.textContent--
        }
    }
    if (score.textContent == 0) {
        heading2.textContent = 'Trial exceeded,please click on play again button to restart'
    }


}
btn.addEventListener('click', logic)

// const reset = document.querySelector('.btn-Again')
// function reset() {
//     location.reload('reset');
// }