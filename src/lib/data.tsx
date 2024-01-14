import { Post, User } from "./model";
import { connectDb } from "./connectToDb";
import { userTypes, PostTypes } from "@/types";

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get posts");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get post");
  }
};

export const getUser = async (id: userTypes) => {
  try {
    connectDb();
    const users = await User.findById(id);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to User");
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get Users");
  }
};
