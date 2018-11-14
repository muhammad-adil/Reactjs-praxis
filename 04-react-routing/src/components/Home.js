import React from "react";
import movies from "../movies.json";
import FeaturedMovie from "./FeaturedMovie";

const Home = () => {
  const topFour = movies.slice(0, 4);
  return (
    <div>
      <h2 className="featured-movies__header">Home Component</h2>
      <hr />
      <h4 className="featured-movies__header">Featured Movie</h4>
      <hr />

      <div className="featured-movies">
        {topFour.map((movie, i) => <FeaturedMovie movie={movie} key={i} />)}
      </div>
    </div>
  );
};

export default Home;
