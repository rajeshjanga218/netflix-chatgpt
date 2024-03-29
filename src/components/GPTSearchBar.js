import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
// import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/constants';
import { addGPTSearchMovies } from '../utils/GPTSlice';

function GPTSearchBar() {
  const dispatch = useDispatch();
  const GPTSearchValue = useRef();

  const getTMDBSearchMovies = async (movie) => {
    // console.log("hsgjh",API_OPTIONS)
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await data.json();
    return json;
  };

  const handleGPTSearchClick = async () => {
    // const searchQuery = `Act as movie recomendation system and suggest some movies for the query : ${GPTSearchValue.current.value}. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Bhahubali, Gaddar, RRR, Sholay, Golmal`
    // const GPTResult = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: searchQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    const GPTResult = {
      id: 'chatcmpl-8dxVtUvEOqiMcoBxuKwiar1IjZgM1',
      object: 'chat.completion',
      created: 1704534253,
      model: 'gpt-3.5-turbo-0613',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content:
              'Lagaan, Dangal, Gangs of Wasseypur, Taare Zameen Par, Dilwale Dulhania Le Jayenge',
          },
          logprobs: null,
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 65,
        completion_tokens: 32,
        total_tokens: 97,
      },
      system_fingerprint: null,
    };

    // handle error

    const GPTMovies = GPTResult.choices[0]?.message.content.split(', ');

    const tmdbPromise = GPTMovies.map((movie) => getTMDBSearchMovies(movie));

    const tmdbResults = await Promise.all(tmdbPromise);
    // console.log(tmdbResults)
    // console.log(GPTMovies)
    dispatch(
      addGPTSearchMovies({
        GPTMovieNames: GPTMovies,
        GPTSearchMovies: tmdbResults,
      }),
    );
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="absolute w-1/2 top-1/4 inset-x-1/4 p-4 grid grid-cols-6 gap-2 text-white bg-black opacity-75 rounded-md">
        <input
          ref={GPTSearchValue}
          type="text"
          className="col-span-4 p-2 bg-transparent text-white border rounded-md"
          placeholder="serch here"
        />
        <button
          onClick={handleGPTSearchClick}
          type="submit"
          className="col-span-2 p-2 border rounded-md text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default GPTSearchBar;
