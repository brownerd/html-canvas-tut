const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
document.body.appendChild(canvas)
document.body.style.margin = 0
canvas.style.backgroundColor = 'hsl(30, 100%, 50%)'
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Not too sure about this one
// Also super performance heavy

context.fillRect(0, 0, 600, 600)

for( var i = 0; i < 1000; i++ ) {
  var x = Math.round(Math.random() * 600),
      y = Math.round(Math.random() * 600)
  setPixel(context, x ,y, 255, 255, 255, 255)
}

function setPixel(context, x, y, r, g, b, a) {
  var imageData = context.createImageData(1, 1)
  imageData.data[0] = r
  imageData.data[1] = g
  imageData.data[2] = b
  imageData.data[3] = a

  context.putImageData(imageData, x, y)
}
