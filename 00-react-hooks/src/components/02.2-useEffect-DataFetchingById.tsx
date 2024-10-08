import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function DataFetchingById() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState<number | string>(1);

  useEffect(() => {
    if (typeof id === "number") {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          console.log(res);
          setPost(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value ? parseInt(value) : "");
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
      <p>{post?.title}</p>
    </div>
  );
}

export default DataFetchingById;
