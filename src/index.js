import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Cookies from 'js-cookie'

if (!window.location.href.includes('iframe')) {
  let branch = Cookies.get('nf_ab')
  if (!branch) {
    branch = 'b-test'
    Cookies.set('nf_ab', branch, {
      sameSite: 'none',
      secure: true,
    })
    window.location.reload(true)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
