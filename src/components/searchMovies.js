import React, { useState } from 'react';
import MovieCard from './movieCard';
const SearchMovies = () => {

    // states - input query, movies 
    const [query, setQuery] = useState('');

    // create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => {
        // prevent the form from submitting
        e.preventDefault();
 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=42c140a2fe0c3971953120a8a9c8f0d3&language=en-US&page=1&include_adult=false&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json(); // returns a promise
            console.log(data.results);
            setMovies(data.results);
        }
        catch(err) {
            console.log(err);
        }

    }

    return (
        <>

            <form className = "form" onSubmit = { searchMovies }>
                <label className = "label" htmlFor = "query">Movie Name</label>

                <input className = "input" type = "text" name = "query" placeholder = "i.e. Jurassic Park"
                value = { query } onChange = {(e) => setQuery(e.target.value)}
                />

                <button className = "button" type = "submit">Search</button>
            </form>

            <div className = "card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieCard movie = { movie } key = {movie.id}/>
                ))}
            </div>

        </>

    )
}

export default SearchMovies
