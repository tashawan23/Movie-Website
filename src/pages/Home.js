import React, { useState, useEffect } from 'react'
import '../App.css'
import { MovieCard } from '../components/MovieCard'
import $ from 'jquery'


export const Home = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=5c4d382b419ad4ad44888e48becde8cd"
        $.ajax ({
            url: url,
            success: (res) => {
                setMovies(res.results)
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    })

    return( 
        <div>
        <div className="movie-container">
        <div>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </div>
        </div>
    )
}