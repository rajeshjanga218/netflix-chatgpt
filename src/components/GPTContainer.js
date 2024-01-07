import React from 'react'
import GPTSearchBar from "./GPTSearchBar"
import { BG_IMAGE } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTContainer = () => {
  const {GPTSearchMovies,GPTMovieNames} = useSelector((store)=>store.GPTSearch)
  
  return (
    <div className='h-full w-full'>
       <GPTSearchBar />
      <img className='w-full h-full fixed -z-10' src={BG_IMAGE} alt='ng-image'/>
      <div className='top-1/2 absolute w-full'>
          {GPTMovieNames &&
          GPTMovieNames.map((movieName,index)=>
            <MovieList title={movieName} movies={GPTSearchMovies[index].results} />
          )
        } 
      </div>
    </div>
  )
}

export default GPTContainer