import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  
  return (
    <div className="parent">
      {User.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default App
