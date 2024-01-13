import React from "react";
import type { Metadata } from "next";
import { PostsCard } from "@/components";
import { getPosts } from "@/lib/data";

//Search Engine Optimization

export const metadata: Metadata = {
  title: "Anime Blog",
  description: "Anime Blog Description",
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div className="w-full flex flex-col lg:grid grid-cols-2 ">
      {posts.map((data) => {
        return (
          <div key={data._id}>
            <PostsCard data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
