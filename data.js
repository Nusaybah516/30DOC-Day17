//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['violet', 'cornflowerblue', 'crimson', 'tomato', 'navy', 'purple','burlywood','coral','cyan','red']

body.style.backgroundColor = 'red'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}