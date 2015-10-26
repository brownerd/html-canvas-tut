//import {getRandomIntInclusive as rando} from './random'

var canvas = document.createElement('canvas')
canvas.height = 400
canvas.width = 400
canvas.style.backgroundColor = 'red'
document.body.appendChild(canvas)

const context = canvas.getContext('2d')

// window.onload = function() {
//   var context = canvas.getContext("2d");
//
//   context.fillRect(10, 10, 100, 200)
// };


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


/////////
// es6 //
/////////

window.onload = () => {
  context.fillRect(50, 50, 200, 200)
  context.strokeRect(10,10,10,10)
  scatter(5)
}

var scatter = (count, fn) => {
  for( let i = 0; i < count; i++ ) {
    context.strokeRect(random(10, 300), random(10, 300),random(10, 300),random(10, 300))
  }
}


// NOTES - Canvas is the area that we are drawing in

// NOTES - Context is the object we are going to render

// Notes - Got random function from MDN
