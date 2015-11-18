/* global Image */

var canvas = document.querySelector('#gamecanvas')
var context = canvas.getContext('2d')

// Checks the width and height of the canvas
var maxX = canvas.width
var maxY = canvas.height

// Loads the monster image at position 0,0
var monsterImage1 = new Image()
var monsterImage2 = new Image()

monsterImage1.src = 'images/spikymonster1_small.png'
monsterImage2.src = 'images/spikymonster2_small.png'

// When image1 loads, begin render function and also check for image width and height
// Since both monsterImage1 and monsterImage2 are the same size, no need to check again
monsterImage1.onload = function () {
  renderMonster()
  monsterWidth = monsterImage1.width
  monsterHeight = monsterImage1.height
}

// Defines the beginning width and height of the monsters so you have a starting point
var monsterWidth = 80
var monsterHeight = 80

// Defines the starting position of x-position and y-position of monsterImage1
var xPosMonster = maxX - monsterWidth
var yPosMonster = maxY - monsterHeight

// Provides an image frame to change animations
var imageFrame = 1

// The actual function that draws the objects onto the canvas
function renderMonster () {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height)
  // In this instance, we do not have to draw background because its already in css.
  // Code below first draws the monster then switch monster photo to animate
  if (imageFrame === 1) {
    context.drawImage(monsterImage1, xPosMonster, yPosMonster)
    imageFrame = 2
  } else {
    context.drawImage(monsterImage2, xPosMonster, yPosMonster)
    imageFrame = 1
  }
}

// Draw enemy sun
var angrysunImage1 = new Image()
var angrysunImage2 = new Image()

angrysunImage1.src = 'images/spikeMan_walk1.png'
angrysunImage2.src = 'images/spikeMan_walk2.png'

// When image1 loads, begin render function and also check for image width and height
// Since both monsterImage1 and monsterImage2 are the same size, no need to check again

angrysunImage1.onload = renderAngrysun

var minX = 0
var minY = 0

function getRandom (min, max) {
  return Math.random() * (max - min) + min
}

// Draws the suns to the board
function renderAngrysun () {
  var xPosAngrysun = getRandom(minX, maxX - angrysunImage1.width)
  var yPosAngrysun = getRandom(minY, maxY - angrysunImage1.height)
  context.drawImage(angrysunImage1, xPosAngrysun, yPosAngrysun)
}

// Draws the suns until a limit
var counter = 0
var intervalID = setInterval(function () {
  if (counter === 5) {
    window.clearInterval(intervalID)
  } else {
    renderAngrysun()
    counter = counter + 1
  }
}
, 1000)

// Defines the keyboard strokes so its more understandable
var keyLeft = 37
var keyUp = 38
var keyRight = 39
var keyDown = 40

// Defines the action to take when pressing on keyboard
document.body.addEventListener('keydown', function (event) {
  var code = event.keyCode
  event.preventDefault()

  if (code === keyLeft) {
    if (xPosMonster > 0) {
      xPosMonster -= 10
    }
  } else if (code === keyUp) {
    if (yPosMonster > 0) {
      yPosMonster -= 10
    }
  } else if (code === keyRight) {
    if (xPosMonster + monsterWidth + 10 < maxX) {
      xPosMonster += 10
    }
  } else if (code === keyDown) {
    if (yPosMonster + monsterHeight + 10 < maxY) {
      yPosMonster += 10
    }
  }
  // Renders the drawing function which will clear the canvas and draw the objects again
  renderMonster()
})


// TESTING AREA
