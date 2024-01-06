import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({id}) => {
    const trailer = useSelector((state)=>state.movies?.trailerVideo)
    useMovieTrailer(id)

  return (
    <div className='w-full h-full'>
        <iframe className='w-full aspect-video'  src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground