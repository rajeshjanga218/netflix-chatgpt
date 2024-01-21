import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies)
  if (!movies) return

  return (
    <div className="w-full h-full">
      <MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies?.nowPlayingMovies} />
      <MovieList title={'family'} movies={movies?.nowPlayingMovies} />
      <MovieList title={'Horror'} movies={movies?.nowPlayingMovies} />
    </div>
  )
}

export default SecondaryContainer
