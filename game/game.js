/* global Image */

var canvas = document.querySelector('#gamecanvas')
var context = canvas.getContext('2d')

var maxX = canvas.width
var maxY = canvas.height

var minX = 0
var minY = 0

var allArray = []

var token = new Image()
token.src = 'images/coin_small.png'

var player = new Image()
player.src = 'images/spikymonster1_left_small.png'

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
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
    // context.drawImage(this.image, this.x + 10, this.y + 10)
  }
}

function setup () {
  for (var i = 0; i < 10; i++) {
    var x = (Math.random() * ((maxX - 50) - minX)) + minX
    var y = (Math.random() * ((maxY - 50) - minY)) + minY
    var token = new Token(x, y)
    allArray.push(token)
  }

  var player = new Player(10, 10)
  allArray.push(player)
}

function renderAll () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  allArray.forEach(character => {
    character.render()
  })
}

setup()
setInterval(renderAll, 1000)
