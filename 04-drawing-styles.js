// Make canvas
const canvas = document.createElement('canvas')

// Set 2d context
const context = canvas.getContext('2d')

// Append to body
document.body.appendChild(canvas)

// Canvas dimensions
var w = window,
    H = w.innerHeight,
    W = w.innerWidth

canvas.height = H
canvas.width = W

// Canvas Style
canvas.style.backgroundColor = 'hsl(60, 100%, 50%)'
document.body.style.margin = 0

// Random number function
function random(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min
}


///////////////
// Example 1 //
///////////////


// context.fillStyle = 'hsla(200, 100%, 50%, 0.5)'
// context.strokeStyle = 'hsl(320, 100%, 50%)'
// context.lineWidth = 10
//
//
// context.beginPath()
// context.rect(100, 100, 100, 100)
// context.stroke()
//
// context.beginPath()
// context.rect(250, 100, 100, 100)
// context.fill()
//
// // NOTES - stroke and fill order matter
// context.beginPath()
// context.rect(100, 250, 100, 100)
// context.stroke()
// context.fill()
//
// context.beginPath()
// context.rect(250, 250, 100, 100)
// context.fill()
// context.stroke()

const cap = ['butt', 'square', 'round']
const joint = ['miter', 'bevel', 'round' ]

// Caps at the end of the lines
context.lineCap = cap[2]

// Joint styles
context.lineJoin = joint[0]

// Meter limit
context.miterLimit = 11

context.lineWidth = 20;
context.strokeStyle = 'hsl(0, 0%, 50%)'
draw()

context.lineWidth = 1
context.strokeStyle = 'hsl(320, 100%, 50%)'
draw()

///////////////
// Example 2 //
///////////////

function draw() {
  context.beginPath()
  context.moveTo(50, 50)
  context.lineTo(150, 150)
  context.stroke()

  context.beginPath()
  context.rect(200, 200, 100, 100)
  context.stroke()

  context.beginPath()
  context.moveTo(390, 500)
  context.lineTo(400, 400)
  context.lineTo(410, 500)
  context.stroke()
}
