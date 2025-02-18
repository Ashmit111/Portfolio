"use client";
import React from "react";
import TypewriterEffect from "@/components/ui/TypeWriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const Page: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start overflow-y-scroll scrollbar">
      {/* Left Section */}
      <div className="w-full lg:w-2/5 m-6 lg:m-14 flex flex-col border-gray-400 border-2 rounded-3xl border-opacity-20 p-6 pt-0">
        <motion.div
          whileHover={{ y: -5, scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex justify-center lg:ml-5 mt-6"
        >
          <Image src={"/dp.jpg"} alt="logo" width={200} height={200} className="rounded-full border-cyan-300 border-4" />
        </motion.div>
        <div className="pt-3 text-center">
          <p className="text-gray-300 font-mono text-2xl font-semibold">
            Hey I&apos;m <b className="text-cyan-300">Ashmit</b>
          </p>
          <TypewriterEffect
            text="A 3rd-year engineering student from Mumbai and a self-taught Full-Stack Developer who loves bringing websites to life. I enjoy building complex backend systems while also crafting engaging and visually appealing frontends. Beyond coding, I love reading books and travelling. Currently, I’m exploring new technologies in Web3 and sharpening my problem-solving skills through competitive programming 🚀"
            delay={300}
            className="font-mono text-gray-400 pt-4"
          />
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-full lg:w-2/4 m-6 lg:m-14 flex flex-col border-gray-400 border-2 rounded-3xl border-opacity-20 p-6">
        <h1 className="flex justify-center text-3xl font-semibold text-cyan-300 font-mono pt-2">Skills</h1>
        <div className="p-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 pl-4 font-mono">{category.category}</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={idx} className="relative group flex flex-col items-center">
                      {/* Tooltip */}
                      <span className="absolute -top-7 bg-black text-cyan-300 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono font-semibold">
                        {skill.name}
                      </span>
                      {/* Skill Icon */}
                      <Icon className="text-4xl cursor-pointer text-white" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
