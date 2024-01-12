"use client";

import Link from "next/link";
import Links from "../Navlink/Links";
import { NavLinks } from "@/constants";
import { usePathname } from "next/navigation";
import style from "./Navlink.module.scss";

const Nav = () => {
  const session = false;
  const isAdmin = false;

  const pathName = usePathname();
  return (
    <div className="p-2 flex lg:grid lg:grid-flow-col items-center">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="hidden lg:flex justify-around items-center ">
        {NavLinks.map((data) => {
          return (
            <div
              key={data.title}
              className={`${pathName === data.path && style.active}`}
            >
              <Links data={data} />
            </div>
          );
        })}
      </div>
      <div className="">
        {session ? (
          <div className="flex items-center justify-end">
            <div className="">
              {isAdmin && <Links data={{ title: "Admin", path: "/admin" }} />}
            </div>
            <div className="">
              <button>Logout</button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <Links data={{ title: "Login", path: "/login" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
