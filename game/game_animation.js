function SpriteSheet(path, frameWidth, frameHeight) {

   var image = new Image();
   var framesPerRow;

   // calculate the number of frames in a row after the image loads
   var self = this;
   image.onload = function() {
      framesPerRow = Math.floor(image.width / frameWidth);
   };

   image.src = path;
}


  var currentFrame = 0;  // the current frame to draw
  var counter = 0;       // keep track of frame rate

  // Update the animation
  this.update = function() {

    // update to the next frame if it is time
    if (counter == (frameSpeed - 1))
      currentFrame = (currentFrame + 1) % endFrame;

    // update the counter
    counter = (counter + 1) % frameSpeed;
    }
  };

  // Draw the current frame
  this.draw = function(x, y) {
     // get the row and col of the frame
     var row = Math.floor(currentFrame / framesPerRow);
     var col = Math.floor(currentFrame % framesPerRow);

     ctx.drawImage(
        image,
        col * frameWidth, row * frameHeight,
        frameWidth, frameHeight,
        x, y,
        frameWidth, frameHeight);
 };
}

spritesheet = new SpriteSheet('images/countdown_animation.png', 80, 80, 3, 5);

function animate() {
   requestAnimFrame( animate );
   ctx.clearRect(0, 0, 1000, 500);

   spritesheet.update();

   spritesheet.draw(12.5, 12.5);
}
