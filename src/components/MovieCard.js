import React from 'react';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-32 h-48'>
      <img
        className='w-full h-full object-cover'
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={`movie-${posterPath}`}
      />
    </div>
  );
}

export default MovieCard;
