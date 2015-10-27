// Make canvas
const canvas = document.createElement('canvas')

// Asign 2d context
const context = canvas.getContext('2d')

// Append context to body
document.body.appendChild(canvas)

// style canvas - dimenstion and colors
let w = window,
    H = w.innerHeight,
    W = w.innerWidth

canvas.style.backgroundColor = 'hsl(180, 100%, 90%)'
document.body.style.margin = 0

canvas.height = H
canvas.width = W

// Random function
function random(min, max) {
  return Math.floor( Math.random() * (max - min + 1 ) ) + min
}


/////////////////////
// linear gradient //
/////////////////////


// var gradient = context.createLinearGradient(100, 100, 200, 100)
// gradient.addColorStop(0, 'red')
// gradient.addColorStop(0.50, 'yellow')
// gradient.addColorStop(1, 'cyan')
//
// context.fillStyle = gradient
// context.fillRect(100, 100, 100, 100)


/////////////////////
// Radial gradient //
/////////////////////

//var gradient = context.createRadialGradient(300, 300, 0, 300, 300, 150)
var gradient = context.createRadialGradient(350, 220, 0, 310, 300, 170)
gradient.addColorStop(0, 'white')
gradient.addColorStop(1, 'black')

context.fillStyle = gradient
context.arc(300, 300, 150, 0, Math.PI * 2, false)
context.fill()
