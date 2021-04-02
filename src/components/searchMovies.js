import React from 'react'

const SearchMovies = () => {

    const searchMovies = async (e) => {
        // prevent the form from submitting
        e.preventDefault();
        console.log("submitting");

        const query = "October Baby";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=42c140a2fe0c3971953120a8a9c8f0d3&language=en-US&page=1&include_adult=false&query=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        }
        catch(err) {
            console.log(err);
        }

    }

    return (
        <form className = "form" onSubmit = { searchMovies }>
            <label className = "label" htmlFor = "query">Movie Name</label>

            <input className = "input" type = "text" name = "query" placeholder = "i.e. Jurassic Park"></input>

            <button className = "button" type = "submit">Search</button>
        </form>
    )
}

export default SearchMovies
