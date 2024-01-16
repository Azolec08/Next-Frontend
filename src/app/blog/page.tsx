import React from "react";
import type { Metadata } from "next";
import { getPosts } from "@/lib/data";
import PostCard from "@/components/PostCard/PostCard";
import { PostTypes } from "@/types";

//Search Engine Optimization

export const metadata: Metadata = {
  title: "Anime Blog",
  description: "Anime Blog Description",
};

const AnimeApi = async () => {
  const api = await fetch("http://localhost:3000/api/blog");

  return api.json();
};

const Blog = async () => {
  const allPosts = await AnimeApi();
  return (
    <div className="w-full flex flex-col lg:grid grid-cols-2 ">
      {allPosts.map((posts: PostTypes) => {
        return (
          <div key={posts.slug}>
            <PostCard posts={posts} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
