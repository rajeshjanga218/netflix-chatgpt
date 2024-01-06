import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
    // console.log(movies) 
  return (
    <div className='w-full h-full flex flex-col justify-center gap-2'>
      <div>{title}</div>
      <div className='flex overflow-x-auto'>
        <div className='flex gap-4' >
            {movies && movies.map((movie)=>{
              return <MovieCard key={movie.id} posterPath={movie.poster_path}/>}
              )
            }
          </div>
      </div>
    </div>
    
  )
}

export default MovieList