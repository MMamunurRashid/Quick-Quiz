import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-slate-800 text-white">
      <div className="w-4/5 m-auto">
        <div>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="h-6 w-6 md:hidden"
          >
            {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </div>

        <div className="flex justify-between  bg-slate-800 text-white">
          <div>
            <h1>Quick Quiz</h1>
          </div>

          <div
            className={`bg-slate-800 w-1/2  text-white w-full md:flex justify-center absolute md:static duration-500 ease-in ${
              menuOpen ? "top-6" : "top-[-120px]"
            }`}
          >
            <Link className="pl-5" to={"/home"}>
              Home
            </Link>
            <Link className="pl-5" to={"/home"}>
              Home
            </Link>
            <Link className="pl-5" to={"/home"}>
              Home
            </Link>
            <Link className="pl-5" to={"/home"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
