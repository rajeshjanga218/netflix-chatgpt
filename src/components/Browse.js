import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTContainer from './GPTContainer';

function Browse() {
  const GPTSearch = useSelector((store) => store.GPTSearch?.GPTSearch);
  useNowPlayingMovies();

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
  );
}

export default Browse;
