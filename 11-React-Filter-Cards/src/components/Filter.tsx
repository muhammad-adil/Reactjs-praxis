import React from "react";

interface Props {}

function Filter(props: Props) {
  const {} = props;

  return (
    <div className="filter-container">
      <button>All</button>
      <button>Comedy</button>
      <button>Action</button>
    </div>
  );
}

export default Filter;
