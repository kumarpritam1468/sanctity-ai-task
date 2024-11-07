import React, { useEffect, useState } from 'react'
import { ArrowRight, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Took help from AI

  const getCurrentlyVisibleSection = () => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section');
  
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionTop + sectionHeight - viewportHeight / 2) {
        return section;
      }
    }
    return null;
  };  

  const [logoColor, setLogoColor] = React.useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getCurrentlyVisibleSection();
      if (currentSection) {
        const sectionIndex = Array.prototype.indexOf.call(document.querySelectorAll('section'), currentSection);
        if (sectionIndex === 3 || sectionIndex === 5 || sectionIndex === 7) {
          setLogoColor('black');
        } else {
          setLogoColor('white');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className='fixed flex h-16 px-4 w-screen justify-between items-center z-50'>
      <div>
        <img src="/logo.png" alt="Sanctity" className={`${logoColor === "white" ? "invert" : "invert-0"} w-36`} />
      </div>

      <div className=' flex gap-4 items-center'>
        <div className=' flex flex-col gap-1 rounded-full items-center justify-center bg-[#42524B]/40 backdrop-blur-lg size-12 group cursor-pointer'
          onClick={() => setMenuOpen(true)}
        >
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

      <div className={`${menuOpen ? "absolute" : "hidden"} z-40 top-0 left-0 w-full h-[100svh] bg-black/70`}>
      </div>
      <div className={`absolute z-50 bg-white/10 backdrop-blur-lg h-[calc(100vh-32px)] top-4 -right-[500px]  ${menuOpen ? " right-5" : ""} rounded-3xl w-[400px] max-md:w-[300px] max-sm:w-[250px] transition-all duration-500 ease-out px-6 flex flex-col justify-between py-8`}>
        <div className="flex flex-col gap-6">
          <div className="flex cursor-pointer gap-2" onClick={() => setMenuOpen(false)}>
            <X color='#6B766A' />
            <h2 className='text-[#6B766A]'>close</h2>
          </div>

          <div className=' bg-[#6B766A] h-0.5 w-full'></div>

          <div className=' flex flex-col gap-2'>
            <a href="/" className=' no-underline text-pri hover:text-[#6B766A] text-4xl font-medium flex items-end gap-1 transition-all duration-300'>
              <span>Services</span>
              <ArrowUpRight size={24} color='#6B766A' />
            </a>
            <a href="/" className=' no-underline text-pri hover:text-[#6B766A]  text-4xl font-medium flex items-end gap-1 transition-all duration-300'>
              <span>Resources</span>
              <ArrowUpRight size={24} color='#6B766A' />
            </a>
            <a href="/" className=' no-underline text-pri hover:text-[#6B766A] text-4xl font-medium flex items-end gap-1 transition-all duration-300'>
              <span>Case Studies</span>
              <ArrowUpRight size={24} color='#6B766A' />
            </a>
            <a href="/" className=' no-underline text-pri hover:text-[#6B766A] text-4xl font-medium flex items-end gap-1 transition-all duration-300'>
              <span>About</span>
              <ArrowUpRight size={24} color='#6B766A' />
            </a>
            <a href="/" className=' no-underline text-pri hover:text-[#6B766A] text-4xl font-medium flex items-end gap-1 transition-all duration-300'>
              <span>Contact</span>
              <ArrowUpRight size={24} color='#6B766A' />
            </a>
          </div>
        </div>

        <div className=' flex flex-col gap-1'>
          <p className=' text-lg text-[#6B766A] font-medium'>UpWork</p>
          <p className=' text-lg text-[#6B766A] font-medium'>Fiverr</p>
          <p className=' text-lg text-[#6B766A] font-medium'>LinkedIn</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar