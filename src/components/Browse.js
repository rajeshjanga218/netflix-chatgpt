import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux'
import GPTContainer from './GPTContainer'

const Browse = () => {
  const GPTSearch = useSelector((store) => store.GPTSearch?.GPTSearch)
  useNowPlayingMovies()

  return (
    <div className="h-full w-full">
      <Header />
      {GPTSearch ? (
        <GPTContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
