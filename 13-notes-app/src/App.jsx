import React from 'react'
import { useState } from 'react'

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = [...task]
    newTask.push({ title, details })
    setTask(newTask)


    console.log(title);
    setTitle("")
    console.log(details);
    setDetails("")
  }
  const [title, setTitle] = useState("")

  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const handleDelete = (idx) => {
    const newTask = [...task]
    newTask.splice(idx, 1)
    setTask(newTask) 
    
  }


  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">


      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 flex flex-col gap-5 p-10"
      >
        <h1 className='text-xl font-bold'>Add Notes</h1>

        {/*first input*/}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium 
                     border-2 border-gray-400 
                     bg-transparent rounded 
                     outline-none focus:border-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full font-medium h-32 py-2 
                     border-2 border-gray-400 
                     outline-none rounded 
                     bg-transparent 
                     focus:border-white 
                     resize-none"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white font-medium w-full 
                     outline-none text-black 
                     px-5 py-2 rounded"
        >
          Add Note
        </button>

      </form>


      <div className="lg:w-1/2 bg-gray-900 p-10 flex h-screen">

        <h1 className='text-xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 overflow-y-auto flex-1'>
           
          {task.map(function (elem, idx) {
            return <div key={idx} className="relative h-52 w-40 bg-cover rounded-2xl text-black py-8 px-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
              <div>
              <h3 className='text-xl font-bold leading-tight'>{elem.title}</h3>
              <p className='text-sm mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={() => handleDelete(idx)} className="absolute cursor-pointer active:scale-3d bottom-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">Delete</button>
            </div>

          })}
        </div>

      </div>

    </div>
  )
}

export default App
