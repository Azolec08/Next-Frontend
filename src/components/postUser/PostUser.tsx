import React from "react";
import { userTypes } from "@/types";
import { getUser } from "@/lib/data";
import Image from "next/image";

type userIdProps = {
  userId: userTypes;
  createdAt: string;
};

const PostUser = async ({ userId, createdAt }: userIdProps) => {
  const user = await getUser(userId);
  return (
    <section className="flex flex-col gap-y-2">
      <div className="relative w-[40px] h-[40px]">
        <Image
          src={user.image ? user.image : "/img/noneImg.png"}
          alt="imgUser"
          fill
          sizes="max-width: 100px"
          className=" rounded-full"
        />
      </div>
      <div>{createdAt.toString().slice(4, 16)}</div>
      <div>{user.username}</div>
    </section>
  );
};

export default PostUser;
