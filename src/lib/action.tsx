"use server";
import { PostTypes } from "@/types";
import { connectDb } from "./connectToDb";
import { Post } from "./model";
import { revalidatePath } from "next/cache";

//Add new Data to database

export const addPost = async (formData: any) => {
  const { title, image, slug, author, userId } = Object.fromEntries(formData);

  try {
    connectDb();
    const newPost = new Post({
      title,
      image,
      slug,
      author,
      userId,
    });

    await newPost.save();
    console.log("New post Created");
    revalidatePath("/blog");
  } catch (error) {
    console.log("Failed to create post");
    return { error: "Something went wrong" };
  }
};

//Delete data to database

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    console.log("your post has been deleted");
    revalidatePath("/blog");
  } catch (error) {
    console.log("Failed to delete data", error);
  }
};
