const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

document.body.appendChild(canvas)
document.body.style.margin = 0

var w = window,
    W = w.innerWidth,
    H = w.innerHeight

// NOTES - canvas dimensions, don't need to add units (px)
canvas.height = H
canvas.width = W

canvas.style.backgroundColor = 'hsl(180, 100%, 50%)'

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//////////////////////
// Stoke a sin wave //
//////////////////////


context.beginPath()
context.moveTo(0, 300)

function make(max) {
  for( let x = 0; x < max; x++ ) {
    let y = 300 + Math.sin(x) * max
    context.lineTo(x,y)
  }
  context.stroke()
}


// make(40)


/////////////////////
// Quadratic curve //
/////////////////////

var p0 = {
      x: Math.random() * 600,
      y: Math.random() * 600
    },
    p1 = {
      x: Math.random() * 600,
      y: Math.random() * 600
    },
    p2 = {
      x: Math.random() * 600,
      y: Math.random() * 600
    },
    p3 = {
      x: Math.random() * 600,
      y: Math.random() * 600
    }

context.beginPath()
context.moveTo(p0.x, p0.y)
//context.quadraticCurveTo(p1.x, p1.y, p2.x,p2.y)
context.bezierCurveTo(p1.x, p1.y, p2.x,p2.y, p3.x, p3.y)
context.stroke()

/////////////////
// Draw points //
/////////////////

drawPoint(p0)
drawPoint(p1)
drawPoint(p2)
drawPoint(p3)

function drawPoint(p) {
  context.fillRect(p.x - 4, p.y - 4, 8, 8)
}


/////////////////////
// making a circle //
/////////////////////

let rRand = random(100, 300)

context.beginPath()
context.arc(rRand, rRand, 100, 0, Math.PI * 2)
//context.arc(rRand, rRand, 100, 0, 2, true)
context.strokeStyle = 'hsl(60, 100%, 100%)'
context.lineWidth = 10
context.stroke()
