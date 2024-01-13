import { Post, User } from "./model";
import { connectDb } from "./connectToDb";

export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Cant Get Data");
  }
};

export const getPost = async (slug: string) => {
  try {
    connectDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const getUser = async (id: number) => {
  try {
    connectDb();
    const users = await User.findById(id);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect");
  }
};

const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect");
  }
};
