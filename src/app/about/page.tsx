import React from "react";
import type { Metadata } from "next";
import { getUsers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Anime About App",
  description: "About Description",
};

const page = async () => {
  const allPosts = await getUsers();
  return (
    <div>
      {allPosts.map((post: any) => {
        return <div>{post.username}</div>;
      })}
    </div>
  );
};

export default page;
