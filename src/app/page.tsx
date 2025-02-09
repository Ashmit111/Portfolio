'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';

function Page() {
  return (
    <div className='p-6 overflow-y-scroll scrollbar'>
      <div className='flex flex-col sm:flex-row items-center gap-10 w-full'> 
        {/* Image Section (Responsive) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className='flex items-center w-full sm:w-1/2 h-auto sm:h-96 justify-center sm:justify-end pr-0 sm:pr-10 pt-10 sm:pt-16'>
          <Image
            src={"/front.jpeg"}
            alt="front-jpeg"
            width={350}
            height={350}
            className="w-40 sm:w-72 h-auto" // Scales only on mobile
          />
        </motion.div>

        {/* Text Section (Responsive) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-left gap-2 pt-10 sm:pt-36">
          <motion.p
            className="font-sans text-sm sm:text-lg font-medium text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} >
            Hello, I'm
          </motion.p>

          <motion.p
            className="text-3xl sm:text-5xl font-semibold font-mono text-sky-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }} >
            Ashmit Singh
          </motion.p>

          <motion.p
            className="text-sm sm:text-lg font-sans font-medium text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }} >
            FullStack Developer
          </motion.p>

          <motion.button className='bg-white text-gray-950 font-sans rounded-full w-28 sm:w-32 h-10 sm:h-11 mt-3 font-medium text-base sm:text-xl hover:bg-sky-300'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }} >
            <Link href="/contact">
              Hire me
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Page;
