// window.onload = function() {

const canvas = document.querySelector('#gamecanvas')
const context = canvas.getContext('2d')

const maxX = canvas.width
const maxY = canvas.height

const minX = 0
const minY = 0

let xPos = 10
let yPos = 10

let tokenArray = []
let playerArray = []

const token = new Image()
token.src = 'images/coin_small.png'

var playerReady = false
var player = new Image()
player.onload = function () { playerReady = true }
player.src = 'images/spikymonster1_left_small.png'

const monsterWidth = 80
const monsterHeight = 80

let rightPressed, leftPressed, upPressed, downPressed = false

let tokensCaught = 0

class Token {
  constructor (x, y, image = token) {
    this.x = x
    this.y = y
    this.image = image
    this.width = 50
    this.height = 50
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

class Player {
  constructor (x, y, image = player, speed = 20) {
    this.x = x
    this.y = y
    this.image = image
    this.speed = speed
    this.width = 80
    this.height = 80
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

// Handle keyboard controls
document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

//Defines the keyboard strokes so its more understandable
const keyLeft = 37
const keyUp = 38
const keyRight = 39
const keyDown = 40

function keyDownHandler (e) {
  // console.log('pressed')
  if (e.keyCode === keyRight) {
    rightPressed = true
  } else if (e.keyCode === keyLeft) {
    leftPressed = true
  } else if (e.keyCode === keyUp) {
    upPressed = true
  } else if (e.keyCode === keyDown) {
    downPressed = true
  }
}

function keyUpHandler (e) {
  if (e.keyCode === keyRight) {
    rightPressed = false
  } else if (e.keyCode === keyLeft) {
    leftPressed = false
  } else if (e.keyCode === keyUp) {
    upPressed = false
  } else if (e.keyCode === keyDown) {
    downPressed = false
  }
}

function collides (a, b) {
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y
}

function handleCollisions () {
  // console.log('handleCollisions')
  playerArray.forEach(function (player) {
    tokenArray.forEach(function (token) {
      if (collides(player, token)) {
        console.log('Collided 1')
      }
    })
  })

  tokenArray.forEach(function (token) {
    if (collides(token, player)) {
      console.log('Collided 2')
    }
  })
}

function setupCoin () {
  // console.log('setupCoin')
  for (var i = 0; i < 10; i++) {
    var x = (Math.random() * ((maxX - 50) - minX)) + minX
    var y = (Math.random() * ((maxY - 50) - minY)) + minY
    var token = new Token(x, y)
    tokenArray.push(token)
  }
}

function setupPlayer () {
  // console.log('setupPlayer')
  var player = new Player(xPos, yPos)
  playerArray.push(player)

  if (rightPressed) { xPos += player.speed }
  else if (leftPressed) { xPos -= player.speed }
  else if (upPressed) { yPos -= monsterHeight }
  else if (downPressed) { yPos += monsterHeight }

  // if (collides(player, token)) {
  //   console.log('collision!')
  //   ++tokensCaught
  //   token.image = player
  // }
}

function clearCanvas () {
  // console.log('clearCanvas')
  context.clearRect(0, 0, canvas.width, canvas.height)
}

function renderTokens () {
  // console.log('renderTokens')
  tokenArray.forEach(character => {
    character.render()
  })
}

function renderPlayer () {
  // console.log('renderPlayer')
  playerArray.forEach(character => {
    character.render()
  })
  playerArray.splice(0, 1)
}

function main () {
  // console.log('main')
  clearCanvas()
  setupPlayer()
  renderTokens()
  renderPlayer()
  handleCollisions()
}

setupCoin()
setInterval(main, 100)

// var main = function () {
// 	var now = Date.now()
// 	var delta = now - then
//
//   setup()
// 	renderAll()
//
// 	then = now
//
// 	// Request to do this again ASAP
// 	requestAnimationFrame(main)
// }
//
// var then = Date.now()
// main()

// }

//
// console.log('2 ' + xPos)
// console.log('2 ' + yPos)
