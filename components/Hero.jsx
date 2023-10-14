"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="lg:py-16 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-36 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-3xl sm:text-5xl lg:text-5xl px-8 lg:leading-normal font-bold">
            <p className="text-sm text-blue-600">
            Welcome Everone,
            </p>
            <span className="bg-clip-text text-transparent lg:text-6xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <div>
            <TypeAnimation
              sequence={[
                "Tahasin",
                1000,
                "Web Developer",
                1000,
                "FULL STACK Developer",
                1000,
                "Mobile App Developer",
                1000,
                "UI/UX Designer",
                1000,                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </div>
          </h1>
          <div className="hidden lg:block ml-10">
          <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mt-3"
            >
              <span className="block text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full lg:overflow-hidden bg-[#0f111a] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/hero-image.png"
              alt="hero image"
              className="absolute inline-block h-64 w-64 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
          <div className="md:hidden mt-10">
          <Link
              href="/#contact"
              className="px-1 flex items-center justify-center py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mt-3"
            >
              <span className="block text-white font-semibold uppercase bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="hidden lg:block">
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;