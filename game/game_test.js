var canvas = document.querySelector('#gamecanvas')
var context = canvas.getContext("2d");

//Loads the monster image at position 0,0
var monsterImage1 = new Image();
var monsterImage2 = new Image()

//When image1 loads, begin render function and also check for image width and height
//Since both monsterImage1 and monsterImage2 are the same size, no need to check again
monsterImage1.onload = function () {
  renderMonster();
  monsterWidth = monsterImage1.width
  monsterHeight = monsterImage1.height
}

monsterImage1.src = 'spikymonster1_small.png'
monsterImage2.src = 'spikymonster2_small.png'

// Draw enemy sun
var angrysunImage1 = new Image();
var angrysunImage2 = new Image()

// When image1 loads, begin render function and also check for image width and height
// Since both monsterImage1 and monsterImage2 are the same size, no need to check again
angrysunImage1.onload = function () {
  renderAngrysun();
  angrysunWidth = angrysunImage1.width
  angrysunHeight = angrysunImage1.height
}

angrysunImage1.src = "spikeMan_walk1.png"
angrysunImage2.src = "spikeMan_walk2.png"

//Checks the width and height of the canvas
var maxX = canvas.width
var maxY = canvas.height

// Defines the starting position of x-position and y-position of monsterImage1
var xPosMonster = 100
var yPosMonster = 100

var xPosAngrysun = 300
var yPosAngrysun = 300

// Defines the beginning width and height of the monsters so you have a starting point
var monsterWidth = 80
var monsterHeight = 80

// Provides an image frame to change animations
var imageFrame = 1

// The actual function that draws the objects onto the canvas
function renderMonster () {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
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

// Draws the suns to the board
function renderAngrysun () {
  if (imageFrame === 1) {
    context.drawImage(andrysunImage1, xPosAngrysun, yPosAngrysun)
    imageFrame = 2
  } else {
    context.drawImage(angrysunImage2, xPosAngrysun, yPosAngrysun)
    imageFrame = 1
  }
}


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
  renderAngrysun()
})
