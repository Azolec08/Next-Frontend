import Link from "next/link";
import React from "react";
import { LinkTypes } from "@/types";

type dataTypes = {
  data: LinkTypes;
};

const Links = ({ data }: dataTypes) => {
  return (
    <ul className="">
      <li
        className="py-2 px-3 w-20 flex justify-center items-center"
        key={data.title}
      >
        <Link href={data.path}>{data.title}</Link>
      </li>
    </ul>
  );
};

export default Links;
