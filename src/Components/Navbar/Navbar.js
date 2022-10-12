import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-slate-800 text-white pt-2 pb-2">
      <div className="md:w-4/5 m-auto">
        <div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="h-6 w-6 md:hidden "
          >
            {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </div>

        <div className="flex justify-between items-center py-2 bg-slate-800 text-white">
          <div>
            <h1 className="text-4xl">Quick Quiz</h1>
          </div>

          <div
            className={`bg-slate-800 w-1/2   md:text-lg text-white  md:flex justify-center absolute md:static duration-500 ease-in ${
              menuOpen ? "top-10 pb-3" : "top-[-120px]"
            }`}
          >
            <Link className="pl-5 text-xl" to={"/home"}>
              Home
            </Link>
            <Link className="pl-5 text-xl" to={"/statistics"}>
              Statistics
            </Link>
            <Link className="pl-5 text-xl" to={"/blog"}>
              Blog
            </Link>
            <Link className="pl-5 text-xl" to={"*"}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
