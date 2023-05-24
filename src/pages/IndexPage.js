import Post from "../components/Post";
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/post`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <Post {...post} key={post._id} />)}
    </>
  );
}
