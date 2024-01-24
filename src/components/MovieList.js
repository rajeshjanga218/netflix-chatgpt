import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  return (
    <div className="w-full h-full flex flex-col justify-center gap-2 bg-black opacity-70 p-4">
      <h1 className="text-white">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  // movies: PropTypes.arrayOf(PropTypes.any).isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      poster_path: PropTypes.string.isRequired,
      // Add more properties as needed
    }),
  ).isRequired,
};

export default MovieList;
