# BUDOJO - HTML Canvas Tut

Learning about HTML Canvas. Following the tut [Learn HTML5 Graphics and Animation](https://egghead.io/series/learn-html5-graphics-and-animation) at Egghead.io.

## Other Resources

I'm going to review this next
- [Foundation HTML5 Animation with JavaScript](http://users.polytech.unice.fr/~strombon/camash/Foundation%20HTML5%20Animation%20with%20JavaScript/html5-animation-source-code/)


---

## Notes

```js
const canvas = document.createElement('canvas'),
      context = canvas.getContext("2d")

canvas.height = 600
canvas.width = 400
canvas.style.backgroundColor = 'red'
document.body.appendChild(canvas)
```

---

## Cloned from Budojo
- [Budojo](https://github.com/brownerd/budojo)

## Start up
1. clone the repo
1. run `npm i`
1. run `gulp -f 1`
1. Edit the `index.js` file, save it and watch it update in the browser
