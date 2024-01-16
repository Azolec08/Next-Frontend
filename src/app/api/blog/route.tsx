import { connectDb } from "@/lib/connectToDb";
import { Post } from "@/lib/model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("GET Failed");
  }
};
