'use strict';
var alertTimeout = 1800000
var cakeInterval = 60000
var imgPath = 'images/birthday_cake.png'

window.setTimeout(function () {
  window.alert('ERR_60')
}, Math.random() * alertTimeout + 45000)

function replaceWithCake() {
  var counter = 0
  var offset = Math.floor(Math.random() * 4)
  var images = document.getElementsByTagName('img')
  for (var i = offset; i < images.length; i++) {
    if (counter % 4 === 0) {
      if (images[i].width <= 64) {
        images[i].src = imgPath
      }
    }
    counter += 1
  }
}

window.setInterval(replaceWithCake, cakeInterval)
