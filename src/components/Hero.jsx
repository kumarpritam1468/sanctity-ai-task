import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref1 = useRef();

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  const moveX = useTransform(scrollYProgress, [0, 1], ['0rem', '-40rem']);
  const moveY = useTransform(scrollYProgress, [0, 1], ['0rem', '33rem']);
  const moveXSec = useTransform(scrollYProgress, [0, 1], ['0rem', '-13.4rem']);

  return (
    <div>
      <section className=' pt-16 pb-4 px-4 h-screen' ref={ref1}>
        <img src="/gradbg1.png" alt="bg" className=' absolute -top-1/2 2xl:-top-32 left-[35%] 2xl:left-[45%]' />
        <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[140deg] 2xl:-rotate-[130deg] -top-20 2xl:top-0 right-1/2 2xl:right-[55%]' />
        {/* <img src="/svg4.svg" alt="svg" className="absolute right-4 bottom-4 w-20 z-50" /> */}

        <div className=' h-full w-full bg-black/20 relative z-10 pb-36 rounded-3xl flex items-center justify-center'>
          <div>
            <p className=' text-sm mt-6 font-semibold text-[#6B766A] text-center'>Competitive Edge through Creativity & Technology</p>
            <div className=' flex gap-4 items-center mr-32 -mt-2'>
              <h1 className=' text-pri text-[5.2rem] font-medium'>
                Market Insights
              </h1>
              <div className=' flex items-center justify-center h-16 px-10 pt-5 mt-4 rounded-full bg-[#262E29] text-6xl text-sec'>
                *
              </div>
            </div>

            <div className=' flex items-center gap-8 -mt-8 ml-48 w-full '>
              <div className=" h-16 w-60 rounded-full mt-4 overflow-hidden">
                <img src="/hero-mid.jpg" alt="Hero center" className=' h-full w-full object-cover' />
              </div>
              <h1 className=' text-pri text-[5.2rem] font-medium'>
                that
              </h1>
              <div className='relative w-full'>
                <motion.span className=' text-sec text-[5.2rem] font-medium absolute z-50 -top-16' style={{ x: moveX, y: moveY }}>
                  Make a
                </motion.span>
              </div>
            </div>


            <div className="relative -mt-8 ml-28">
              <motion.h1 className=' text-sec text-[5.2rem] font-medium absolute' style={{ x: moveXSec, y: moveY }}>
                Difference
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-fit pt-[calc(100vh-150px)] w-full px-32 relative z-10">
        <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[130deg] 2xl:-rotate-[130deg] -z-10 top-96 2xl:top-80 right-[60%]' />

        <div className='h-0.5 w-full bg-ter '></div>

        <div className="flex w-full justify-between mt-10 relative">
          <p className=' text-pri sticky top-20 h-fit'>Why we exist?</p>
          <h2 className=' text-ter font-medium w-1/2 text-5xl '>
            At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.
          </h2>
        </div>
      </section>
    </div>
  )
}

export default Hero