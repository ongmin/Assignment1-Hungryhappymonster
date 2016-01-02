// window.onload = function() {

const canvas = document.querySelector('#gamecanvas')
const context = canvas.getContext('2d')

const maxX = canvas.width
const maxY = canvas.height

const minX = 0
const minY = 0

let xPos = 10
let yPos = 10

let allArray = []

var token = new Image()
token.src = 'images/coin_small.png'

var playerReady = false
var player = new Image()
player.onload = function () { playerReady = true }
player.src = 'images/spikymonster1_left_small.png'

const monsterWidth = 80
const monsterHeight = 80

var rightPressed = false
var leftPressed = false


class Token {
  constructor (x, y, image = token) {
    this.x = x
    this.y = y
    this.image = image
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

class Player {
  constructor (x, y, image = player) {
    this.x = x
    this.y = y
    this.image = image
    this.speed = 256
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

// Handle keyboard controls
var keysDown = {}

addEventListener('keydown', function (e) { keysDown[e.keyCode] = true }, false)
addEventListener('keyup', function (e) { delete keysDown[e.keyCode] }, false)

function setup () {
  for (var i = 0; i < 10; i++) {
    var x = (Math.random() * ((maxX - 50) - minX)) + minX
    var y = (Math.random() * ((maxY - 50) - minY)) + minY
    var token = new Token(x, y)
    allArray.push(token)
  }

  var player = new Player(xPos, yPos)
  allArray.push(player)
}

var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		yPos -= player.speed * modifier
	}
	if (40 in keysDown) { // Player holding down
		yPos +=player.speed * modifier
	}
	if (37 in keysDown) { // Player holding left
		xPos -= player.speed * modifier
	}
	if (39 in keysDown) { // Player holding right
		xPos += player.speed * modifier
	}
}

function renderAll () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  allArray.forEach(character => {
    character.render()
  })
}

function main () {
  update()
  renderAll()
}

  setup()
setInterval(main, 1000)

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
