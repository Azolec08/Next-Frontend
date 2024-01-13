import React from "react";
import type { Metadata } from "next";
import { getPosts } from "@/lib/data";

//Search Engine Optimization

export const metadata: Metadata = {
  title: "Anime Blog",
  description: "Anime Blog Description",
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Blog;
