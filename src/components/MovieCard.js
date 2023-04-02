import React from 'react'
import "./MovieCard.css"

const MovieCard = ({ title, vote_average, poster_path }) => {

  const API_IMG = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className='card'>
      <div className='poster'>
        <img src={API_IMG + poster_path} alt='' />
      </div>


      <div className='info'>
        <p className='title'>{title}</p>
        <p className='vote'>{vote_average}</p>
      </div>
    </div>
  )
}

export default MovieCard