import React,{useState} from 'react'

const App = () => {
  const [first, setfirst] = useState({name: "Abhinash", age: 20})
  const handleClick = () => {
    const newFirst = {...first}
    newFirst.name = "Abhinash Gond"
    newFirst.age = 21
    setfirst(newFirst)
    
  }
  return (
    <div>
      <h1>{first.name} is {first.age} years old</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default App
App