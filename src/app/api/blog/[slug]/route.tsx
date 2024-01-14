import { connectDb } from "@/lib/connectToDb";
import { Post } from "@/lib/model";
import { NextResponse } from "next/server";
import { PostTypes } from "@/types";
import { NextRequest } from "next/server";

type paramsProp = {
  params: PostTypes;
};

export const GET = async (request: NextRequest, { params }: paramsProp) => {
  const { slug } = params;
  try {
    connectDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};
