import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({id}) => {
    const trailer = useSelector((state)=>state.movies?.trailerVideo)
    useMovieTrailer(id)

  return (
    <div className=''>
        <iframe className='w-full aspect-video'  src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground