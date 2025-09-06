"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

interface INavbarProps {}

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "settings",
    label: "Projects",
    href: "/projects",
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className=" bg-blue-200 text-white p-8 flex gap-6 text-center">
     <ul className="flex justify-end items-center gap-5 text-black font-bold ">
        {navItems.map((eachItem) => (
          <li key={eachItem.id}>
            <Link
              href={eachItem.href}
              className={`${
                isActive(eachItem.href) ? "text-spotify-green" : ""
              }`}
            >
              {eachItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;