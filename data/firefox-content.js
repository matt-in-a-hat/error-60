'use strict';
/*globals self*/
var alertTimeout = 1800000
var cakeInterval = 60000
var imgPath = self.options.imgUrl

window.setTimeout(function () {
  window.alert('ERR_60')
}, Math.random() * alertTimeout + 45000)

function replaceWithCake() {
  var offset = Math.floor(Math.random() * 4)
  var images = document.getElementsByTagName('img')
  for (var i = offset; i < images.length; i += 4) {
    if (images[i].width <= 64) {
      if (images[i].src === imgPath) {
        i += 1
      } else {
        images[i].src = imgPath
      }
    }
  }
}

window.setInterval(replaceWithCake, cakeInterval)
