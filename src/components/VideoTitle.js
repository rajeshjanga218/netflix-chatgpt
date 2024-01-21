import React from 'react'

const VideoTitle = (prophs) => {
  const { title, overview } = prophs
  return (
    <div className="absolute flex items-center bg-gradient-to-r from-black p-4 aspect-video">
      <div className="text-white">
        <h1 className="tex-xl">{title}</h1>
        <p className="w-3/12">{overview}</p>
        <div className="flex gap-2">
          <button className="bg-white p-2 rounded-md border text-black">
            Play
          </button>
          <button className="p-2 rounded-md bg-gray-600 border">
            More info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
