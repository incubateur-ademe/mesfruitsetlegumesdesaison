import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Cookies from 'js-cookie'

let branchRandomNumber = Cookies.get('branch_random_number')
if (!branchRandomNumber) {
  branchRandomNumber = Math.random()
  Cookies.set('branch_random_number', branchRandomNumber, {
    sameSite: 'None',
    secure: true,
  })
}
Cookies.set('nf_ab', branchRandomNumber, {
  sameSite: 'None',
  secure: true,
})

ReactDOM.render(<App />, document.getElementById('root'))
