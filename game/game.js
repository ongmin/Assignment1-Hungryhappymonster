var canvas = document.querySelector('#gamecanvas')
var context = canvas.getContext("2d");

//Loads the monster image at position 0,0
var monsterImage1 = new Image();
var monsterImage2 = new Image()

//When image1 loads, begin render function and also check for image width and height
//Since both monsterImage1 and monsterImage2 are the same size, no need to check again
monsterImage1.onload = function () {
  render();
  monsterWidth = monsterImage1.width
  monsterHeight = monsterImage1.height
}

monsterImage1.src = "spikymonster1_small.png"
monsterImage2.src = "spikymonster2_small.png"

//Checks the width and height of the canvas
var maxX = canvas.width
var maxY = canvas.height

//Defines the starting position of x-position and y-position of monsterImage1
var xPos = 100
var yPos = 100

//Defines the beginning width and height of the monsters so you have a starting point
var monsterWidth = 80
var monsterHeight = 80

//Provides an image frame to change animations
var imageFrame = 1

//The actual function that draws the objects onto the canvas
function render () {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  // In this instance, we do not have to draw background because its already in css.
  // Code below first draws the monster then switch monster photo to animate
  if (imageFrame === 1) {
    context.drawImage(monsterImage1, xPos, yPos)
    imageFrame = 2
  } else {
    context.drawImage(monsterImage2, xPos, yPos)
    imageFrame = 1
  }
}

//Defines the keyboard strokes so its more understandable
var keyLeft = 37
var keyUp = 38
var keyRight = 39
var keyDown = 40

//Defines the action to take when pressing on keyboard
document.body.addEventListener('keydown', function (event) {
  var code = event.keyCode
  event.preventDefault()

  if (code === keyLeft) {
    if (xPos > 0) {
      xPos -= 10
    }
  } else if (code === keyUp) {
    if (yPos > 0) {
      yPos -= 10
    }
  } else if (code === keyRight) {
    if (xPos + monsterWidth + 10 < maxX) {
      xPos += 10
    }
  } else if (code === keyDown) {
    if (yPos + monsterHeight + 10 < maxY) {
      yPos += 10
    }
  }
  //Renders the drawing function which will clear the canvas and draw the objects again
  render()
})
