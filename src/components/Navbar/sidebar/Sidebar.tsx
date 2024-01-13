import React from "react";
import { NavLinks } from "@/constants";
import { globalContext } from "@/createContext/Context";
import Link from "next/link";

const Sidebar = () => {
  const { state, dispatch } = globalContext();
  return (
    <div className={`mt-10`}>
      {NavLinks.map((data) => {
        return (
          <ul key={data.title} className="">
            <Link
              href={data.path}
              onClick={() => dispatch({ type: "SIDESWITCH", payload: false })}
            >
              <li className="p-2 hover:bg-white cursor-pointer  ">
                {data.title}
              </li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};

export default Sidebar;
