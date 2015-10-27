//create canvas
const canvas = document.createElement('canvas')
//assign 2d context
const context = canvas.getContext('2d')
//append canvas to body
document.body.appendChild(canvas)
//style canvas
canvas.style.backgroundColor = 'hsl(88, 100%, 60%)'
document.body.style.margin = 0

let w = window

canvas.height = w.innerHeight,
canvas.width = w.innerWidth

//random function
let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


let image = document.createElement('img')


/////////////////////////
// add image to canvas //
/////////////////////////


// image.src = 'http://bit-101.com/dog.jpg'
// image.addEventListener('load', function() {
//   // full image
//   context.drawImage(image, 0, 0)
//   // resized image
//   context.drawImage(image, 0, 100, 300, 150)
//   // cropped image
//   context.drawImage(image, 280, 20, 150, 150, 0, 0, 100, 100)
// })

////////////////////////////////
// turn drawing into an image //
////////////////////////////////


function stix(count, min, max) {
  context.beginPath()
  for( var i = 0; i < count; i++ ) {
    context.moveTo(random(min, max), random(min, max))
    context.lineTo(random(min, max), random(min, max))
  }
  context.lineWidth = random(1, 50)
  context.strokeStyle = `hsl(${random(1, 359)}, 100%, 50%)`
  context.stroke()
}

stix(10, 0, canvas.width)

image.src = canvas.toDataURL('image/png')
document.body.appendChild(image)
