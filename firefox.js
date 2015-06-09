'use strict';

var data = require('sdk/self').data
var tabs = require('sdk/tabs')

tabs.on('ready', function(tab) {
  tab.attach({
      contentScriptFile: [data.url('firefox-content.js')]
  })
})
