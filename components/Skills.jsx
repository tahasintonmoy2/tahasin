import Image from "next/image";
import React from "react";
import {
  Css,
  Html,
  Nextjs,
  JavaScript,
  Reactjs,
  TailwindCss,
  Github,
  Firebase,
  Flutter,
  MongoDB,
  ExpressJs,
  Nodejs,
  Mui,
  Rust,
  Cpp,
  Sql,
  Kotlin
} from "@/public/assets";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mt-40">
      <div className="max-w-[1240px] flex flex-col justify-center h-full mx-4">
        <div className="flex flex-col justify-center items-center mb-4">
        <p className="text-4xl tracking-widest uppercase font-semibold">
          Skills
        </p>
        <h1 className="py-4 uppercase font-semibold text-blue-500">What I Can Do</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JavaScript} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Reactjs} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindCss} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-slate-500 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Kotlin} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Kotlin</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Flutter} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Flutter</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nextjs} className=" h-20 w-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Rust} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Rust</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Cpp} className=" w-20 h-20 " alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mui} className=" w-20 h-20 " alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongoDB} className=" w-20 h-20 " alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center shadow-gray-300 items-center">
              <div className="m-auto">
                <Image src={Nodejs} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ExpressJs} className="w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>Express JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sql} className=" w-20 h-20" alt="" />
              </div>
              <div className="flex flex-col font-semibold items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;