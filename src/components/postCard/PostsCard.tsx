import React from "react";
import Image from "next/image";
import { PostTypes } from "@/types";

type postProps = {
  data: PostTypes;
};

const PostsCard = ({ data }: postProps) => {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="card  w-[300px] bg-base-100 shadow-xl">
        <figure>
          <div className="relative  h-[200px]">
            <Image
              src={data.image}
              alt="PostImg"
              fill
              priority={true}
              sizes="max-width: 600px"
            />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.author}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsCard;
