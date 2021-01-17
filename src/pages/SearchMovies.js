import React, { useState } from 'react'
import '../App.css'
import { MovieCard } from '../components/MovieCard'
import $ from 'jquery'


export  const SearchMovies = () => {
    const [movies, setMovies] = useState([])
    const [title, setTitle] = useState('')
    
    const searchMovies = () => {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=5c4d382b419ad4ad44888e48becde8cd&query=" + title
        $.ajax ({
            url: url,
            success: (res) => {
                setMovies(res.results)
                //console.log(res)
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
        searchMovies()
    }

    return( 
        <div>
            <input
            className="search-movie__input"
            type="text"
            placeholder="Search movie title"
            value={title}
            onChange={handleChange}
          />
        <div className="movie-container">
        <div>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </div>
        </div>
    )
}
