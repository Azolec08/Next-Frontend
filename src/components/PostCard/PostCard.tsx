import React from "react";
import { PostTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

type postsProps = {
  posts: PostTypes;
};

const PostCard = ({ posts }: postsProps) => {
  return (
    <div className="w-full flex justify-center p-3">
      <div className=" w-72 bg-base-100 shadow-xl">
        <figure className="relative w-full h-[200px]">
          <Image
            src={posts.image}
            alt="Shoes"
            fill
            priority={true}
            sizes="max-width:600px"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{posts.title}</h2>
          <p>{posts.author}</p>
          <div className="card-actions justify-end">
            <Link href={`/blog/${posts.slug}`}>
              <button className="btn btn-primary">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
