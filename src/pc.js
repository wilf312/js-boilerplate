
// ----------------- polyfill関連

// requestAnimationFrame のpolyfill
import raf from 'raf'
raf.polyfill()

// fastclick
import domready from 'domready'
import fastclick from 'fastclick'
domready(function() {
  fastclick.attach(document.body)
})

// fetch
import fetch from 'isomorphic-fetch'