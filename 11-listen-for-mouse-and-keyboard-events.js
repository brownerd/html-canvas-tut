const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
document.body.appendChild(canvas)
document.body.style.margin = 0
//canvas.style.backgroundColor = 'hsl(30, 100%, 50%)'
canvas.width = window.innerWidth
canvas.height = window.innerHeight

////////////////////////////////
// Draw circle on mouse event //
////////////////////////////////


function mmove() {
  canvas.addEventListener('mousemove', function() {
    context.beginPath()
    context.arc(event.clientX, event.clientY, 10, 0, Math.PI * 2)
    context.stroke()
  })
}

//mmove()

function click() {
  canvas.addEventListener('click', function() {
    // getBoundingClientRect
    // this gets give you the rectangle for the element
    // that it's called on in relation to the client area
    var rect = canvas.getBoundingClientRect()

    context.beginPath()
    context.arc(
      event.clientX - rect.left,
      event.clientY - rect.top,
      10,
      0,
      Math.PI * 2
    )
    context.stroke()
  })
}

//click()



/////////////////
// Drawing app //
/////////////////
context.lineWidth = 10

var rect = canvas.getBoundingClientRect(),
    mouseX,
    mouseY

canvas.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
  mouseX = event.clientX - rect.left
  mouseY = event.clientY - rect.top
  canvas.addEventListener('mousemove', onMouseMove)
  document.body.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(event) {
  context.beginPath()
  context.moveTo(mouseX, mouseY)
  mouseX = event.clientX - rect.left
  mouseY = event.clientY - rect.top
  context.lineTo(mouseX, mouseY)
  context.stroke()
}

function onMouseUp(event) {
  canvas.removeEventListener('mousemove', onMouseMove)
  document.body.removeEventListener('mouseup', onMouseUp)
}
