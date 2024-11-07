import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import WhyWeExist from './WhyWeExist';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const ref1 = useRef();

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  const moveX = useTransform(scrollYProgress, [0, 1], ['0rem', '-37.4rem']);
  const moveY = useTransform(scrollYProgress, [0, 1], ['0rem', '33rem']);
  const moveXSec = useTransform(scrollYProgress, [0, 1], ['0rem', '-10rem']);


  const moveYPhn = useTransform(scrollYProgress, [0, 1], ['0vh', '32vh']);

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className=' w-full overflow-x-hidden' id='hero'>
      <section className=' pt-16 pb-4 px-4 h-[100svh] w-full' ref={ref1}>
        <img src="/gradbg1.png" alt="bg" className=' absolute -top-1/2 max-md:top-[60%] max-md:scale-125 2xl:-top-32 left-[35%] max-md:left-[30%] 2xl:left-[45%]' />
        <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[140deg] 2xl:-rotate-[130deg] -top-20 2xl:top-0 right-1/2 2xl:right-[55%]' />
        {/* <img src="/svg4.svg" alt="svg" className="absolute right-4 bottom-4 w-20 z-50" /> */}

        <div className=' h-full w-full bg-black/20 relative z-10 pb-36 rounded-3xl flex max-md:flex-col max-md:px-6 items-center max-md:items-start justify-center max-md:justify-end max-md:pb-60'>


          <p className=' text-3xl mt-6 font-semibold text-[#6B766A]  md:hidden'>Competitive Edge through Creativity & Technology</p>


          <div  >
            <p className=' text-sm max-md:text-4xl mt-6 font-semibold text-[#6B766A] text-center max-md:hidden'>Competitive Edge through Creativity & Technology</p>


            <div className=' flex gap-4 items-center mr-32 -mt-2'>
              <h1 className=' text-pri text-[5.2rem] max-md:text-6xl max-md:mt-6 font-medium'>
                Market Insights

                <span className='text-pri text-6xl ml-2 font-medium'>that</span>

              </h1>


              <div className=' flex items-center justify-center h-16 px-10 pt-5 mt-4 rounded-full bg-[#262E29] text-6xl text-sec max-md:hidden group'>
                *
              </div>

            </div>



            <div className=' flex items-center gap-8 -mt-8 ml-48 max-md:ml-0 w-full '>

              <div className=" h-16 w-60 rounded-full mt-4 overflow-hidden max-md:hidden">
                <img src="/hero-mid.jpg" alt="Hero center" className=' h-full w-full object-cover' />
              </div>


              <h1 className=' text-pri text-[5.2rem] max-md:hidden font-medium'>
                that
              </h1>


              <div className='relative w-full'>
                <motion.span className=' text-sec text-[5.2rem] max-md:text-6xl font-medium absolute z-30 -top-16 max-md:top-8 max-md:left-0'
                  // If isDesktop then only moveYphn else both moveX and moveY
                  style={!isDesktop ? { y: moveYPhn } : { x: moveX, y: moveY }}>
                  Make a
                </motion.span>
              </div>
            </div>


            <div className="relative -mt-8 ml-28 max-md:ml-0">
              <motion.h1
                className=' text-sec text-[5.2rem] max-md:text-6xl font-medium absolute max-md:top-32 max-md:left-0'
                // If isDesktop then only moveYphn else both moveX and moveY
                style={!isDesktop ? { y: moveYPhn } : { x: moveXSec, y: moveY }}
              >
                Difference
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* Hero second part */}
      <WhyWeExist />

    </div>
  )
}

export default Hero