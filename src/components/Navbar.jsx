import React from 'react'
import {ArrowRight} from "lucide-react";

const Navbar = () => {
  return (
    <nav className='fixed flex h-16 px-6 w-full justify-between items-center z-50'>
      <div>
        <img src="/logo.png" alt="Sanctity" className=' invert w-40' />
      </div>

      <div className=' flex gap-4 items-center'>
        <div className=' flex flex-col gap-1 rounded-full items-center justify-center bg-[#42524B]/80 backdrop-blur-lg size-12 group cursor-pointer' >
          <div className=' bg-[#6F907E] h-0.5 w-4 mr-2 group-hover:ml-4 transition-all duration-300'></div>
          <div className=' bg-[#6F907E] h-0.5 w-4 ml-2 group-hover:mr-4 transition-all duration-300'></div>
        </div>

        <div className=' bg-box-pri h-10 w-40 text-black flex gap-4 items-center justify-center rounded-full cursor-pointer overflow-hidden group relative'>
          <h1 className=' absolute left-4 group-hover:-rotate-90 group-hover:translate-y-20 group-hover:translate-x-6 transition-all duration-500 ease-in-out'>
            Get in touch
          </h1>
          <h1 className=' absolute rotate-90 -translate-y-20 translate-x-10 left-0 group-hover:rotate-0 group-hover:-translate-y-0 group-hover:translate-x-4 transition-all duration-500 ease-in-out'>
            Don't be shy
          </h1>

          <div className=' size-3 group-hover:size-7 overflow-hidden bg-black rounded-full relative ml-[70%] transition-all duration-500 ease-in-out'>
            <div className=' absolute top-0 right-10 group-hover:right-1.5 group-hover:top-1.5 transition-all duration-500 ease-in-out'>
              <ArrowRight size={16} color='#97d28b' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar