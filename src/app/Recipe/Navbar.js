"use client";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../../../public/my-recipes-logo.png";

export default function Navbar() {
  const [Click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-around items-center  bg-white shadow-black">
        <Image src={Logo} width="130" height="130" alt="Logo" />
        <ul className="md:flex md:justify-around md:items-center sm:hidden hidden gap-9">
          <li>
            <a className="cursor-pointer">Home</a>
          </li>
          <li>
            <a className="cursor-pointer">Menu</a>
          </li>
          <li>
            <a className="cursor-pointer">Reviews</a>
          </li>
          <li>
            <a className="cursor-pointer">Blog</a>
          </li>
          <li>
            <a className="cursor-pointer">Contacts</a>
          </li>
          <SearchIcon className=" cursor-pointer" />
        </ul>
        <>
          <div
            className={`md:hidden flex items-center gap-5 sm:ml-10 md:ml-0`}
            onClick={toggleMenu}
          >
            {!Click ? (
              <MenuIcon className="cursor-pointer" />
            ) : (
              <ClearIcon className="cursor-pointer" />
            )}
            <SearchIcon className="md:hidden block cursor-pointer" />
          </div>
        </>{" "}
      </div>

      {Click ? (
        <ul className="flex flex-1 flex-col bg-white transition-all  justify-around items-center gap-7">
          <li>
            <a className="cursor-pointer">Home</a>
          </li>
          <li>
            <a className="cursor-pointer">Menu</a>
          </li>
          <li>
            <a className="cursor-pointer">Reviews</a>
          </li>
          <li>
            <a className="cursor-pointer">Blog</a>
          </li>
          <li>
            <a className="cursor-pointer">Contacts</a>
          </li>
        </ul>
      ) : null}
    </>
  );
}
