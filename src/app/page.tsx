"use client";

import Http from "@/helpers/http/http";
import { IPost } from "@/helpers/post/postInterfcae";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "@/helpers/post/post";

const http = new Http(axios);
const post = new Post(http);

function HomePage() {
  const [data, setData] = useState<IPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [postId, setPostId] = useState<string>("");

  const fetchPost = async (id: number) => {
    const getPost = await post.getPosts(id);
    if (getPost.error) {
      setError(getPost.error);
    } else {
      setData([getPost.data]);
    }
  };

  const fetchPostMultiple = async (id: number) => {
    const getPost = await post.getPosts(id);
    if (getPost.error) {
      setError(getPost.error);
    } else {
      setData([getPost.data]);
    }
  };

  const isIdMultiple = (id: string): boolean => {
    let checkedId = id.replace(" ", "");
    return checkedId.split("").length > 1;
  };

  const RenderPost = () => {
    if (!data.length) return <></>;

    if (error) return <i>{error}</i>;

    return data.map((i, id) => (
      <div key={id}>
        <h2>{i.title}</h2>
        <p>{i.body}</p>
      </div>
    ));
  };

  return (
    <>
      <h1>Get your post</h1>

      <p>Insert your Id </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id: number = parseInt(postId);

          fetchPost(id);
        }}
      >
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />

        <button type="submit"> get post</button>
      </form>

      <RenderPost />
    </>
  );
}

export default HomePage;
