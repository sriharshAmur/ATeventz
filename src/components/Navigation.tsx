import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navigation = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (bool: boolean) => void;
}) => {
  return (
    <div className=" w-full px-8 py-4 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex items-center  justify-between ">
        <div className="flex items-center">
          <Link href="/">
            <div className="mr-8 text-2xl font-bold">AtEventz</div>
          </Link>
          <div className="hidden items-center lg:flex">
            <div className="mx-3 ">Attending</div>
            <div className="mx-3 ">Hosting</div>
            <Link href="/events">
              <div className="mx-3 grid place-items-center">
                <IoSearch size={20} />
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden items-center lg:flex">
          {darkMode ? (
            <button
              className="mr-2 cursor-pointer"
              onClick={() => setDarkMode(false)}
            >
              <MdLightMode size={25} />
            </button>
          ) : (
            <button
              className="mr-2 cursor-pointer"
              onClick={() => setDarkMode(true)}
            >
              <MdDarkMode size={25} />
            </button>
          )}

          <div className="mx-3 ">Host Eventz</div>
          <div className="mx-3 ">Login/Signout</div>
        </div>
        <div className="grid place-items-center lg:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
