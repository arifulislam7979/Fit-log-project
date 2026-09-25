"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import logoimage from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all block ${
            isActive("/")
              ? "bg-[#1f290d] text-[#98C304]"
              : "text-gray-300 hover:text-white hover:bg-zinc-800"
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all block ${
            isActive("/my-plan")
              ? "bg-[#1f290d] text-[#98C304]"
              : "text-gray-300 hover:text-white hover:bg-zinc-800"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-[#0b0c0e] text-white border-b border-zinc-800 px-3 sm:px-4 py-5 w-full ">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Left Side: Hamburger (Mobile) + Desktop Logo */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile Hamburger Menu */}
          <div className="dropdown md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-gray-300 p-0 min-h-0 h-8 w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-zinc-900 border border-zinc-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg gap-1"
            >
              {navLinks}
            </ul>
          </div>

          {/* Desktop Logo */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 text-xl font-black tracking-wider"
          >
            <Image
              src={logoimage}
              alt="logo image"
              className="w-7 h-7 object-contain"
            />
            <span>FITLOG</span>
          </Link>
        </div>

        {/* Center: Mobile Logo */}
        <div className="md:hidden flex items-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-base font-black tracking-wider whitespace-nowrap"
          >
            <Image
              src={logoimage}
              alt="logo image"
              className="w-5 h-5 object-contain"
            />
            <span>FITLOG</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-2 list-none p-0 m-0">
            {navLinks}
          </ul>
        </div>

        {/* Right Side: Resized Plan & Saved Counters */}
        <div className="flex items-center gap-2 sm:gap-6 ">
          {/* Plan Counter */}
          <div className="flex items-center gap-1 sm:gap-2  hover:opacity-80">
            <Link
              href="/my-plan"
              className="text-[11px] sm:text-sm font-medium text-gray-300"
            >
              Plan
            </Link>
            <span className="bg-[#98C304] text-black font-bold text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center leading-none">
              0
            </span>
          </div>

          {/* Saved Counter */}
          <div className="flex items-center gap-1 sm:gap-2  hover:opacity-80">
            <Link
              href="/my-plan"
              className="text-[11px] sm:text-sm font-medium text-gray-300"
            >
              Saved
            </Link>
            <span className="border border-zinc-700 text-gray-300 font-semibold text-[10px] sm:text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center leading-none">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
