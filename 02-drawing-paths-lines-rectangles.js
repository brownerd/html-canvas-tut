const canvas = document.createElement('canvas'),
    context = canvas.getContext("2d")

canvas.height = 600
canvas.width = 400
canvas.style.backgroundColor = 'red'
document.body.appendChild(canvas)

window.onload = function() {

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.lineTo(300, 200);
  context.lineTo(100, 200);

  context.closePath();
  //context.fill this will also close the path
  context.stroke();

  context.fillRect(0, 0, 50, 50)
  context.strokeRect(200, 50, 100, 10)

  context.beginPath();
  context.moveTo(0, 200)
  context.lineTo(300, 200)
  context.lineTo(300, 300)
  context.lineTo(100, 300)

  context.closePath()
  context.stroke()
};
