const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')
document.body.appendChild(canvas)
document.body.style.margin = 0
canvas.style.backgroundColor = 'hsl(220, 100%, 50%)'
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

context.fillStyle = 'white'

/////////////////////////
// Scale and Translate //
/////////////////////////


// context.save()
// context.scale(0.5, 0.5)
// // Make a grid
// for( var j = 0; j < 10; j++ ) {
//   context.save()
//   for( var i = 0; i < 10; i++ ) {
//     context.fillRect(0, 0, 30, 30)
//     context.translate(40, 0)
//   }
//   context.restore()
//   context.translate(0, 40)
// }
//
// context.restore()
// context.globalAlpha = 0.5
// context.fillStyle = 'red'
// context.fillRect(0, 0, 100, 100)


//////////////////////////
// Rotate and translate //
//////////////////////////


// context.translate(300, 0)
// context.rotate(Math.PI / 4)
// context.fillRect(0, 0, 100, 100)


/////////////////////////
// Graphing calculator //
/////////////////////////

// context.translate(300, 300)
// context.scale(1, -1 // flip graph upside down)
// context.beginPath()
// context.moveTo(-300, 0)
// context.lineTo(300, 0)
// context.moveTo(0, -300)
// context.lineTo(0, 300)
// context.stroke()
//
// context.beginPath()
// context.arc(100, 100, 10, 0, Math.PI * 2)
// context.fill()


// NOTES - look into Save and Restore

///////////////////////////////
// Draw dots around a circle //
///////////////////////////////


var num = 20
context.translate(300, 300)
for( var i = 0; i < num; i++ ) {
  context.rotate(Math.PI * 2 / num)
  context.beginPath()
  context.arc(100, 0, 10, 0, Math.PI * 2)
  context.fill()
}
