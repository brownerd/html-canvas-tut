const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

document.body.appendChild(canvas)
document.body.style.margin = 0

canvas.width = window.innerWidth
canvas.height = window.innerHeight
//canvas.style.backgroundColor = 'hsl(60, 100%, 50%)'


// context.globalCompositeOperation

let blend = [
  'source-over',
  'source-in',
  'source-out',
  'source-atop',

  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',

  'lighter',
  'copy',
  'xor',

  'multiply',
  'screen',
  'overlay',
  'lighten',
  'darken',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity'
]

// // Drop shadows
// context.shadowColor = 'grey'
// context.shadowBlur = 10
// context.shadowOffsetX = 10
// context.shadowOffestY = 10
//
//
// context.fillStyle = 'red'
// context.fillRect( 50, 200, 400, 100)
//
// // add alpha to second rect
// context.globalAlpha = 0.5
//
// // blend modes
// context.globalCompositeOperation = 'lighten' // default
//
//
// context.fillStyle = 'cyan'
// context.fillRect(200, 50, 100, 400)


context.shadowColor = 'hsl(0, 0%, 50%)'

document.body.addEventListener('mousemove', function(event) {
  context.clearRect(0, 0, 600, 600)
  var dx = 300 - event.clientX,
      dy = 300 - event.clientY,
      distance = Math.sqrt(dx * dx + dy * dy)

  context.shadowOffsetX = dx * 0.5
  context.shadowOffsetY = dy * 0.5
  context.shadowBlur = distance * 0.25
  context.fillStyle = 'red'
  context.fillRect(250, 250, 100, 100)
})
