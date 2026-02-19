import React from 'react'

const App = () => {

  localStorage.setItem('user', 'Abhinash')
  localStorage.setItem('age', 25)
 const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')

  const userObj = {
    name: 'Abhinash',
    age: 25
  }

  localStorage.setItem('userObj', JSON.stringify(userObj))

  const userObjFromStorage = JSON.parse(localStorage.getItem('userObj'))
 

  return (
    <div>
      App
    </div>
  )
}

export default App
