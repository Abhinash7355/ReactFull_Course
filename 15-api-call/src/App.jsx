import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  // const getData =async ()=>{
  //   const data =await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const jsonData = await data.json()

  //   console.log(jsonData);
    
  // }
  const [data, setData] = useState([])

const getData =async()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data)
}

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>{data.map(function(elem, index){
        return <div key={index}>
          <h1>{elem.author}</h1>
          <img src={elem.download_url} alt={elem.author} />
          
        </div>
        
      })
        }</div>
    </div>
  )
}

export default App
