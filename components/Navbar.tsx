import Link from "next/link";
import React from "react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineSearch,
} from "react-icons/md";
import { Search } from "./Search";

interface NavbarProps {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ darkTheme, setDarkTheme }: NavbarProps) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link href="/">
        <a className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900 flex items-center justify-center">
          Loogle
          <MdOutlineSearch className="ml-2" />
        </a>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg flex items-center justify-center"
      >
        {darkTheme ? (
          <>
            <MdOutlineLightMode className="mr-1" />
            Dark
          </>
        ) : (
          <>
            <MdOutlineDarkMode className="mr-1" />
            Light
          </>
        )}
      </button>
    </div>
    <Search />
  </div>
);
