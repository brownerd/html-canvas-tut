// create canvas
const canvas = document.createElement('canvas')
// assign context
const context = canvas.getContext('2d')
// append canvas to body
document.body.appendChild(canvas)
// style canvas
canvas.style.backgroundColor = 'hsl(300, 100%, 90%)'
let w = window,
    H = w.innerHeight,
    W = w.innerWidth

canvas.height = H
canvas.width = W

document.body.style.margin = 0

// random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}



context.lineWidth = 2
context.fillStyle = 'white'
context.font = '8rem Source Sans Pro'

context.textAlign = 'center'

context.fillText('hello, world!', canvas.width / 2, 150)
//context.strokeText('hello, world!', 0, 150)


let baseline = [
  'top',
  'hanging',
  'middle',
  'alphabetic', // default
  'ideographic',
  'bottom'
]
