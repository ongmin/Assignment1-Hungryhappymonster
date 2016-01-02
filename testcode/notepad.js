function setupPlayer () {
  var player = new Player(xPos, yPos)
  allArray.push(player)

  if (rightPressed) { xPos += monsterWidth }
  else if (leftPressed) { xPos -= monsterWidth }
  else if (upPressed) { yPos -= monsterHeight }
  else if (downPressed) { yPos += monsterHeight }

  var i = allArray.indexOf('player')
  if (i !== -1) { allArray.splice(i, 1) }
}
