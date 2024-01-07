import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  console.log(title,movies)
  return (
    <div className='w-full h-full flex flex-col justify-center gap-2 bg-black opacity-70 p-4'>
      <h1 className='text-white'>{title}</h1>
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