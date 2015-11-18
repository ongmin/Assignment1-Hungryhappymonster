
window.onkeydown = function (e) {
  if (!e) {
    e = window.event
  }
  var code = e.keyCode

  var spriteman = document.getElementById('sprite')

  var top = parseInt(spriteman.style.top, 10)
  var left = parseInt(spriteman.style.left, 10)

  if (code === 37) {
    if (left > 0) {
      spriteman.style.left = left - 10 + 'px'
    }
  } else if (code === 38) {
    if (top > 0) {
      spriteman.style.top = top - 10 + 'px'
    }
  } else if (code === 39) {
    if (left + spriteman.width + 10 < window.innerWidth) {
      spriteman.style.left = left + 10 + 'px'
    }
  } else if (code === 40) {
    if (top + spriteman.height + 10 < window.innerHeight) {
      spriteman.style.top = top + 10 + 'px'
    }
  }
}
