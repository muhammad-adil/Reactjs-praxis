import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function DataFetchingOnClick() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState<number | string>(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState<number | string>(
    1
  );

  useEffect(() => {
    if (typeof id === "number") {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idFromButtonClick]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value ? parseInt(value) : "");
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <label htmlFor="id">Enter Id: </label>
      <input
        name="id"
        type="text"
        value={id}
        onChange={handleInputChange}
        title="Only digits"
        max="2"
        pattern="[0-9]{1,5}"
      />
      {/* oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" */}
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>

      <p>{post?.title}</p>
    </div>
  );
}

export default DataFetchingOnClick;
