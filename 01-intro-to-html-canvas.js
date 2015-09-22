var canvas = document.createElement('canvas')
canvas.height = 400
canvas.width = 400
canvas.style.backgroundColor = 'red'
document.body.appendChild(canvas)

// window.onload = function() {
//   var context = canvas.getContext("2d");
//
//   context.fillRect(10, 10, 100, 200)
// };



/////////
// es6 //
/////////



window.onload = () => {
  const context = canvas.getContext('2d')
  context.fillRect(50, 50, 200, 200)
}
