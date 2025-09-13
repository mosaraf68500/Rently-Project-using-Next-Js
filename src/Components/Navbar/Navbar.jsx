"use client"; // Client component since it uses state/interaction

import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../../public/Rently.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="flex">
        <Link href="/" className="px-2 py-1 hover:text-primary">
          Home
        </Link>
      </li>
      <li className="flex">
        <Link href="/about" className="px-2 py-1 hover:text-primary">
          About
        </Link>
      </li>
      <li className="flex">
        <Link href="/contact" className="px-2 py-1 hover:text-primary">
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar start */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Main Logo */}
        <Link
          href="/"
          className="btn btn-ghost text-xl flex items-center gap-2 normal-case"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image
              src={logo}
              alt="Logo"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          Rently
        </Link>
      </div>

      {/* Navbar center for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Navbar end buttons */}
      <div className="navbar-end gap-2.5">
        <Link href="/authentication/register">Register</Link>
        <Link href="/authentication/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
