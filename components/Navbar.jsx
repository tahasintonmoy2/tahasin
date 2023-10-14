"use client";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineClose,
  AiOutlineGithub,
} from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      id="navbar"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/#home">
          <h1 className=" text-blue-600 uppercase text-3xl font-semibold">
            Tahasin
          </h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase font-bold hover:text-blue-600">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:text-blue-600">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase font-bold hover:text-blue-600">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="mx-10 text-sm uppercase font-bold hover:text-blue-600">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <div className="text-blue-500 px-1.5 py-1.5 bg-slate-200 rounded-md">
              <CgMenuRightAlt size={30} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] bg-[#0f111a] h-screen p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-200"
          }
        >
          <div
            onClick={handleNav}
            className=" flex mr-20 mb-2 border-b w-full border-gray-400"
          >
            <h1 className=" text-blue-600 uppercase text-2xl font-semibold">
              Tahasin
            </h1>
            <div className=" ml-20 sm:ml-16 md:ml-44 cursor-pointer text-white px-1.5 py-1.5">
              <AiOutlineClose size={30} />
            </div>
          </div>
          <div>
            <ul>
              <li
                onClick={() => setNav(false)}
                className="pb-2 hover:text-blue-600 uppercase font-semibold"
              >
                <Link href="/#about">About</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pb-2 hover:text-blue-600 uppercase font-semibold"
              >
                <Link href="/#skills">Skills</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="pb-2 hover:text-blue-600 uppercase font-semibold"
              >
                <Link href="/#projects">Projects</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="hover:text-blue-600 uppercase font-semibold"
              >
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            <div className="pt-10">
              <p className="uppercase font-semibold text-blue-600 text-sm">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[60%]">
                <div className="rounded-full shadow-lg shadow-gray-900 p-2 hover:scale-110 cursor-pointer ease-in duration-200">
                  <Link href="https://github.com/tahasintonmoy2">
                    <AiOutlineGithub size="25" />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-900 p-2 hover:scale-110 cursor-pointer ease-in duration-200">
                  <Link href="https://instagram.com/tahasin_x72">
                    <AiOutlineInstagram size="25" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
