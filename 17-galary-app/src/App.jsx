import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react';


const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)



  const getData = async (currentPage) => {
    console.log('get Dta');
    const response = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=30`)
    setData(response.data)
    console.log(response.data);


  }
  useEffect(() => {
    getData(page)
  }, [page])

  let printuserdata = 'no user Available'
  if (data.length > 0) {
    printuserdata = data.map(function (elem, idx) {
      return <div key={idx} className='flex flex-col items-center m-2'>
        <a href={elem.url} target="_blank" rel="noreferrer">
          <div className='h-40 w-60 bg-white rounded-2xl overflow-hidden' >
            <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-white text-sm mt-2 text-center'>
            {elem.author}
          </h2>
        </a>
      </div>
    })
  }

 const handleNext = () => {
  setPage(page + 1)
}

const handlePrev = () => {
  if (page > 1) {
    setPage(page - 1)
  }
}

    return (
      <div className='bg-black overflow-auto h-screen p-4 text-white'>
        {/* <button onClick={getData}
        className='bg-green-600 active:scale-95 px-5 py-2 rounded-lg mt-5 ml-5'>
        Get Data
      </button> */}
        <div className='mt-5 flex flex-wrap justify-center'>
          {printuserdata}

        </div>

        <div className="flex justify-center items-center gap-6 mt-8 mb-6">
          <button onClick={handlePrev}
           className="bg-white text-black px-6 py-2 rounded-lg font-semibold active:scale-95">
            Previous
          </button>
            <span className="text-white font-bold">Page {page}</span>

          <button onClick={handleNext}
          className="bg-white text-black px-6 py-2 rounded-lg font-semibold active:scale-95">
            Next
          </button>
        </div>

      </div>
    )
  }

  export default App
