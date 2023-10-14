"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const About = () => {

  return (
    <section className="pt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" width={500} height={500} className="rounded-2xl" alt=""/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base text-slate-500 lg:text-lg pr-4">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications and mobile applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;