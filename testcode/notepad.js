document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function keyDownHandler (e) {
  if(e.keyCode === 39) {
      rightPressed = true
      alert('Right pressed')
  }
  else if(e.keyCode === 37) {
      leftPressed = true
      alert('Left pressed')
  }
}

function keyUpHandler(e) {
  if(e.keyCode === 39) {
      rightPressed = false
      alert('Right not pressed')
  }
  else if(e.keyCode === 37) {
      leftPressed = false
      alert('Left not pressed')
  }
}
