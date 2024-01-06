import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='absolute top-1/4 inset-x-1/3 p-2 grid grid-cols-6 gap-2 text-white bg-black opacity-90 rounded-md'>
      <input  type='text' className='col-span-4 p-2 bg-transparent text-white border rounded-md' placeholder='serch here' />
      <button className='col-span-2 p-2 border rounded-md text-white'>Search</button>
    </div>
  )
}

export default GPTSearchBar