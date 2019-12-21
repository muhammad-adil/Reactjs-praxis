import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// BrowserRouter as Router,
// import Link from 'react-router/Link';

const FeaturedMovie = ({ movie }) => (
    <div className="featured-movie">
      <div className="featured-movie__image">
        <Link to={`/movies/${movie.id}`}>
          <img alt={movie.name} src={movie.image} />
        </Link>
      </div>

      <div className="featured-movie__info">
        <p>
          <b>{movie.name}</b>
        </p>
        <p>{movie.director}</p>
        <p>{movie.released}</p>
      </div>
    </div>
);

FeaturedMovie.PropTypes = {
  movie: PropTypes.shape({
    director: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default FeaturedMovie;
