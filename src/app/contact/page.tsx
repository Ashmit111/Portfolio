import React from 'react';
import Image from 'next/image';
import { MdMail } from "react-icons/md";
import TypewriterEffect from '@/components/ui/TypeWriter';


function Page() {
  return ( 
    <div>
      <div className='flex justify-center items-center h-96 mt-24 flex-col '>
        <Image src={"/contact-image.png"} alt='contact-image' width={300} height={300}/> 
        <TypewriterEffect text="Let's get in touch, Jump to mail." delay={250} className='text-lg font-mono pt-4 text-gray-500'/>
        <div className='mt-20'>
        <a href="mailto:ashmitsingh862@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20...">
          <button className="bg-red-600 text-white flex justify-center items-center space-x-2 p-2 rounded-full w-80 gap-3 h-16 border-b border-white backdrop-blur-3xl hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out"
            style={{
              boxShadow: "0 4px 15px -3px rgba(255, 255, 255, 0.3)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}>
            <MdMail className="text-white text-2xl" />
            <span className='font-sans font-semibold'>ashmitsingh862@gmail.com</span>
          </button>
        </a>
        </div> 
      </div>
    </div>
  )
}

export default Page;
