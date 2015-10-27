const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
document.body.appendChild(canvas)
document.body.style.margin = 0
canvas.style.backgroundColor = 'hsl(30, 100%, 50%)'
canvas.width = window.innerWidth
canvas.height = window.innerHeight

/////////////////////////////////////
// move a circle across the screen //
/////////////////////////////////////


// var xpos = 0
//
// draw()
//
// function draw() {
//   context.clearRect(0, 0, 600, 600)
//   context.beginPath()
//   context.arc(xpos, 300, 20, 0, Math.PI * 2)
//   context.fill()
//   xpos++
//   requestAnimationFrame(draw)
// }


//////////////////////////////////
// Scale and rotation animation //
//////////////////////////////////


var angle = 0

setInterval(function() {
  requestAnimationFrame(draw)
}, 1000 / 60)

function draw() {
  context.clearRect(0, 0, 600, 600)
  context.save()
  context.translate(300, 300)

  var scale = Math.sin(angle) + 1
  context.scale(scale, scale)

  context.rotate(angle)
  context.fillRect(-50, -50, 100, 100)
  angle += 0.1
  context.restore()
}
