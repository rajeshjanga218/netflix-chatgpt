import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';





const Browse = () => {
  useNowPlayingMovies()

  return (
    <div className=''>
      <Header />
     <div> Browse</div>
    </div>
  )
}

export default Browse