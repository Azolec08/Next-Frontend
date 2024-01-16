import React from "react";
import { addPost } from "@/lib/action";

const page = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" required />
        <input type="text" placeholder="author" name="author" required />
        <input type="text" placeholder="slug" name="slug" required />
        <input type="text" placeholder="image" name="image" required />
        <input type="text" placeholder="userId" name="userId" required />
        <button>Create Post</button>
      </form>
    </div>
  );
};

export default page;
