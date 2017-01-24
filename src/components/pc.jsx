const React = require('react')
const ReactDOM = require('react-dom')
const style = require('../pc.css')





ReactDOM.render(
  <div>
    <h1 className={style.h1}>hello world</h1>
    <h2 className="h2">hello webpack</h2>
  </div>
  ,
  document.querySelector('#app')
  )

