import budo from 'budo'
import errorify from 'errorify'
import garnish from 'garnish'
import gulp from 'gulp'
import yargs from 'yargs'
import once from 'once'
import openURL from 'opn'
import watchify from 'watchify'
import babelify from 'babelify'

const browser = 'google chrome canary'
const argv = yargs
    .usage('Usage: -f [num]')
    .argv

const docs = [
  '01-intro-to-html-canvas.js',
  '02-drawing-paths-lines-rectangles.js',
  '03-drawing-paths-curves-arcs.js',
  '04-drawing-styles.js',
  '05-gradient-fills.js',
  '06-drawing-text.js',
  '07-canvas-imagess.js',
  '08-canvas-effects.js',
  '09-cavas-transformations.js',
  '10-canvas-and-pixels.js',
  '11-listen-for-mouse-and-keyboard-events.js',
  '12-animating-canvass.js'
]

const entry = `./${docs[argv.f - 1]}`

//the development task
gulp.task('default', function(cb) {

  var ready = function(){}
  var pretty = garnish()
  pretty.pipe(process.stdout)

  //dev server
  budo( entry, {
    stream: pretty,        //pretty-print requests
    live: true,            //live reload & CSS injection
    verbose: true,         //verbose watchify logging
    //dir: 'app',            //directory to serve
    transform: babelify,   //browserify transforms
    plugin: errorify       //display errors in browser
  })
  .on('exit', cb)
  .on('connect', function(ev) {
    ready = once(openURL.bind(null, ev.uri, {app: browser} ))
  })
  .once('update', function() {
    ready()
  })
})

// Just a task for Console loggin stuff
gulp.task('clog', function() {
  console.log( entry );
})
