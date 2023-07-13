import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Cookies from 'js-cookie'

let branch = Cookies.get('branch')
if (!branch) {
  branch = ['master', 'b-test'][Math.round(Math.random())]
  console.log(branch)
  Cookies.set('branch', branch, {
    sameSite: 'none',
    secure: true,
  })
}
Cookies.set('nf_ab', branch, {
  sameSite: 'none',
  secure: true,
})

ReactDOM.render(<App />, document.getElementById('root'))
