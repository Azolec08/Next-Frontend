import { Post, User } from "./model";
import { connectToDb } from "./connectToDb";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

const getUser = async (id: number) => {
  try {
    connectToDb();
    const users = await User.findById(id);
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect");
  }
};

const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect");
  }
};
