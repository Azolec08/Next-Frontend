import { connectDb } from "@/lib/connectToDb";
import { Post } from "@/lib/model";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    connectDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("GET Failed");
  }
};
