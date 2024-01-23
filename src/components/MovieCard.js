import React from 'react';
import PropTypes from 'prop-types';

function MovieCard({ posterPath }) {
  return (
    <div className="w-32 h-48">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt={`movie-${posterPath}`}
      />
    </div>
  );
}

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
};

export default MovieCard;
