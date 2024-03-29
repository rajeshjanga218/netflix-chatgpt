import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useMovieTrailer from '../hooks/useMovieTrailer';

function VideoBackground({ id }) {
  const trailer = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(id);

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
}

VideoBackground.propTypes = {
  id: PropTypes.number.isRequired,
};

export default VideoBackground;
