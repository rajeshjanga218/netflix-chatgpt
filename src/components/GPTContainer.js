import React from 'react'
import GPTSearchBar from "./GPTSearchBar"
import { BG_IMAGE } from '../utils/constants'


const GPTContainer = () => {
  return (
    <div>
       <GPTSearchBar />
      <img className='w-full h-full' src={BG_IMAGE} alt=''/>
    </div>
  )
}

export default GPTContainer