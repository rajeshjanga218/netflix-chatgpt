import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const jsonData = await data.json();
    const filteredData = jsonData.results.filter(
      (video) => video.type === 'Trailer',
    );
    const tariler = filteredData.length ? filteredData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(tariler));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
