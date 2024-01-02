import React from 'react'

interface Movie {
    title:string;
    overview:string;
    poster_path:string;
    release_date:string;
}

function Movie({movie: Movie}: any) {

    return (
        <div className='popular-movie'>
            {/* <h2>Movie</h2> */}
            <h2>{Movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`} alt={Movie.title} />
            {/* <p>{Movie.overview}</p> */}
        </div>
    )
}

export default Movie
