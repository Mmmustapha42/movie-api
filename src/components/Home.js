import React from 'react';
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard"
import './Home.css'

const Home = () => {

  const API_url = "https://api.themoviedb.org/3/movie/popular?api_key=a548f87b6dba2016283774d36511cb59";

  const API_Search = "https://api.themoviedb.org/3/search/movie?api_key=a548f87b6dba2016283774d36511cb59&query=";

  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_url)
       .then(res => res.json())
       .then(data => setMovies(data.results))
  },[])


  console.log(movies)


  const handleSearch = (e) => {
    e.preventDefault()

    fetch(API_Search + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }



  return (
    <div className="App">
      <div className="search_nav">
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>


      <div className="movies">
        {movies.map((element) => 
          <MovieCard {...element} />
        )}
      </div>

    </div>
  )
}

export default Home