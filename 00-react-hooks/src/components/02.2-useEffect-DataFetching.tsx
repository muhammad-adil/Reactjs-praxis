import React, { useEffect, useState } from "react";
import axios from "axios";
import { title } from "process";

interface Post {
    id: number;
    title: string;
    body: string;
}
function DataFetching() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
