// Create
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

// Append
document.body.appendChild(canvas)

// Dimensions
canvas.height = 600
canvas.width = 400

// Style
canvas.style.backgroundColor = 'red'



// Onload
window.onload = function() {

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.lineTo(300, 200);
  context.lineTo(100, 200);

  context.closePath();
  //context.fill this will also close the path
  context.stroke();

  // Box in upper left corner
  context.fillStyle = '#00ff00'
  context.fillRect(0, 0, 50, 50)

  // remove section
  // it works like an overlay
  context.clearRect(200, 50, 50, 100)


  // Lower shape
  context.beginPath();
  context.moveTo(0, 200)
  context.lineTo(300, 200)
  context.lineTo(300, 300)
  context.lineTo(100, 300)

  context.closePath()
  context.strokeStyle = '#fff'
  context.stroke()
};
