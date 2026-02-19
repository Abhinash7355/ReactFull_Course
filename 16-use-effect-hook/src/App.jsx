import React, { useEffect,useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(function() {
    console.log('useEffect called')
  },[num])
  return (
    <div>
      <h1>Use Effect Hook {num}</h1>
      <h1>valu of num2 is {num2}</h1>
      <button onMouseEnter={()=>{
        setnum(num+5)
      }}
      onMouseLeave={()=>{
        setnum2(num2-5)
      }}
      >Click me</button>
    </div>
  )
}

export default App
