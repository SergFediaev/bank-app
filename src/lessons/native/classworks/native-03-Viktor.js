const img = document.getElementById('img')
const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')

const handler1 = () => {
    console.log('Handler 1')
}

const handler2 = () => {
    console.log('Handler 2')
}

const handler3 = () => {
    console.log('Handler 3')
}

const handler4 = () => {
    console.log('Handler 4')
}

const logger = (text) => {
    console.log(text)
}

const handler = () => {
    // logger('Log this text')
    console.log('Handler 0')
}

// small.onclick = () => {
//     handler()
//     handler1()
// }
// small.onclick = null

console.dir(small)

const handlerLogEvent = (event) => console.log(event)

img.addEventListener('click', handler)
small.addEventListener('click', handler1, {capture: true})
medium.addEventListener('click', handler2)
big.addEventListener('click', handler3, {capture: true})