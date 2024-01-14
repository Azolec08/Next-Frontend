import { getPost } from "@/lib/data";
import Image from "next/image";
import { PostUser } from "@/components";
import { Suspense } from "react";
import { PostTypes } from "@/types";

type slugProp = {
  params: PostTypes;
};

// const AnimeApi = async (slug: string) => {
//   const api = await fetch(`http://localhost:3000/api/blog/${slug}`);

//   return api.json();
// };

const Slug = async ({ params }: slugProp) => {
  const { slug } = params;

  const post = await getPost(slug);
  return (
    <div>
      <div className="w-full flex justify-center p-3">
        <div className=" w-72 bg-base-100 shadow-xl">
          <div className="relative w-full h-[200px]">
            <Image
              src={post.image}
              alt="Shoes"
              fill
              priority={true}
              sizes="max-width:600px"
            />
          </div>

          <div className="card-body">
            <div>
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <p>{post.author}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;
