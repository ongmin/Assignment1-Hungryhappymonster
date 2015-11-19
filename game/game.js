/* global Image */

var canvas = document.querySelector('#gamecanvas1')
var context = canvas.getContext('2d')

var maxX = canvas.width
var maxY = canvas.height

var minX = 0
var minY = 0

var actors = []

var monsterImage1 = new Image()
monsterImage1.src = 'images/spikymonster1_small.png'
var monsterImage2 = new Image()
monsterImage2.src = 'images/spikymonster2_small.png'

class Monster {
  constructor (x, y, image = monsterImage1) {
    this.x = maxX - this.width
    this.y = maxY - this.height
    this.image = image
    this.width = image.width
    this.height = image.height
  }
  render () {
    var imageFrame = 1
    if (imageFrame === 1) {
      context.drawImage(this.image, this.x, this.y)
      imageFrame = 2
    } else {
      context.drawImage(monsterImage2, this.x, this.y)
      imageFrame = 1
    }
  }
}

var tokenImage1 = new Image()
var tokenImage2 = new Image()
tokenImage1.src = 'images/coin_small.png'
tokenImage2.src = 'images/coin_small.png'

class Token extends Monster {
  constructor (x, y, image = tokenImage1) {
    super(x, y, image)
  }
  render () {
    context.drawImage(this.image, this.x, this.y)
  }
}

function setup () {
  for (var i = 0; i < 10; i++) {
    var x = (Math.random() * ((maxX-50)-minX)) + minX
    var y = (Math.random() * ((maxY-50)-minY)) + minY
    var token = new Token(x, y)
    actors.push(token)
  }
  var monster = new Monster(0, 0)
  actors.push(monster)
}

function render () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  actors.forEach(monster => {
    monster.render()
  })
  actors.forEach(token => {
    token.render()
  })
}

setup()
setInterval(render, 16.6667)
