import React, { useState, useEffect } from 'react'
import '../App.css'
import $ from 'jquery'
import { MovieCard } from '../components/MovieCard'

export  const Topmovies = () => {
    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?api_key=5c4d382b419ad4ad44888e48becde8cd&primary_release_year=2020&sort_by=popularity.desc"
        $.ajax ({
            url: url,
            success: (res) => {
                setTopMovies(res.results.slice(0, 10))
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data")
            }
        })
    })

    return( 
        <div className="movie-container">
            <h1 className="topmovies-header">Top Movies of 2020</h1>
        <div>
            {topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        </div>
    )
}