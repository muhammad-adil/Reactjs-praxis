import React, { useEffect } from "react";

interface FilterProps {
  popular: any[];
  setFiltered: Function;
  activeGenre: number;
  setActiveGenre: Function;
}

function FilterMovies({
  popular,
  setFiltered,
  activeGenre,
  setActiveGenre,
}: FilterProps) {
  //   const {} = props;

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
      <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  );
}

export default FilterMovies;
