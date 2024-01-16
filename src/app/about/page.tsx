import React from "react";
import type { Metadata } from "next";
import { getUsers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Anime About",
  description: "About Description",
};

const AnimeApi = async () => {
  const api = await fetch("http://localhost:3000/api/blog");

  return api.json();
};

const page = async () => {
  const allPosts = await getUsers();
  return (
    <div>
      {allPosts.map((post) => {
        return (
          <div key={post.slug}>
            <h1>{post.username}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default page;
