import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { ArrowDown } from "lucide-react"

const TrackRecord = () => {
  const ref1 = useRef();

  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });

  const moveY = useTransform(scrollYProgress, [0, 1], ['0rem', '25rem']);

  const slideUp = (delay) => {
    return {
      initial: {
        x: 0,
        y: '3rem',
        opacity: 0.5
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: .7,
          delay: delay
        }
      }
    }
  }

  return (
    <section className=' h-[140vh] mx-4 py-24 bg-pri rounded-3xl relative' ref={ref1}>
      <motion.div className='absolute top-1/4 -right-1 text-sec' style={{ y: moveY }}>
        <img src="/svg3.svg" alt="" className=' w-12' />
        <ArrowDown className=' absolute left-3 top-10' size={30} />
      </motion.div>

      <div className=' absolute top-0 left-[6.7rem] flex items-start'>
        <img src="/svg7.svg" alt="" className=' rotate-90 -mr-[.5px]' />
        <div className=' bg-[#272D29] rounded-b-3xl w-80 h-20 pt-3 text-[1.3rem] font-medium flex items-center justify-center text-pri/60'>
          Track Record
        </div>
        <img src="/svg6.svg" alt="" className=' rotate-180' />
      </div>

      <div className=' flex gap-4 px-[8.9rem] w-full h-full'>
        <div className=' flex flex-col gap-4'>
          <div className=' relative w-80 h-72 bg-white rounded-3xl flex items-end justify-start py-4 px-6'>
            <img src="/track/card1.png" alt="card1" className=' absolute top-6 right-6 w-16' />
            <div>
              <motion.h1
                className=' text-6xl font-medium text-[#272D29]'
                variants={slideUp(0)}
                initial="initial"
                whileInView="animate"
              >10K</motion.h1>
              <p className=' -mt-1 text-lg text-ter/60'>Businesses analyzed</p>
            </div>
          </div>
          <div className=' relative w-80 h-64 bg-box-pri rounded-3xl flex items-end justify-start py-4 px-6'>
            <img src="/track/card2.png" alt="card1" className=' absolute top-6 right-6 w-20 opacity-40' />
            <div>
              <motion.h1
                className=' text-6xl font-medium text-[#272D29]'
                variants={slideUp(0)}
                initial="initial"
                whileInView="animate"
              >100+</motion.h1>
              <p className=' -mt-1 text-lg text-ter/60'>Markey studied</p>
            </div>
          </div>
        </div>


        <div className=' flex flex-col gap-4 pt-16'>
          <div className=' relative w-80 h-72 bg-[#272D29] rounded-3xl flex items-end justify-start py-4 px-6'>
            <img src="/track/card3.png" alt="card1" className=' absolute top-6 right-6 w-16' />
            <div>
              <div className=' text-6xl font-medium text-pri flex'
              >
                <motion.h1
                  className=' text-[#345E48]'
                  variants={slideUp(0)}
                  initial="initial"
                  whileInView="animate"
                >$
                </motion.h1>
                <motion.h1
                  variants={slideUp(0.1)}
                  initial="initial"
                  whileInView="animate">
                  50M+
                </motion.h1>
              </div>
              <p className=' -mt-1 text-lg text-pri/60'>Raised</p>
            </div>
          </div>
          <div className=' relative w-80 h-64 bg-white rounded-3xl flex items-end justify-start py-4 px-6'>
            <img src="/track/card4.png" alt="card1" className=' absolute top-6 right-6 w-16' />
            <div>
              <motion.h1
                className=' text-6xl font-medium text-[#272D29]'
                variants={slideUp(0)}
                initial="initial"
                whileInView="animate"
              >700+</motion.h1>
              <p className=' -mt-1 text-lg text-ter/60'>Completed projects</p>
            </div>
          </div>
        </div>


        <div className=' flex flex-col gap-4'>
          <div className=' relative w-80 h-72 bg-box-pri rounded-3xl flex items-start justify-start py-6 px-6 overflow-hidden'>
            <div className=' absolute size-36 rounded-full bg-[#ACDBA3] -bottom-10 -right-10'></div>
            <div className=' absolute size-16 rounded-full bg-[#ACDBA3] bottom-20 right-20'></div>
            <div>
              <motion.h1
                className=' text-6xl font-medium text-[#272D29]'
                variants={slideUp(0)}
                initial="initial"
                whileInView="animate"
              >500+</motion.h1>
              <p className=' -mt-1 text-lg text-ter/60'>Clients</p>
            </div>
          </div>
          <div className=' relative w-80 h-64 bg-[#272D29] rounded-3xl flex items-end justify-start py-4 px-6'>
            <img src="/track/card6.png" alt="card1" className=' absolute top-2 right-0 w-28 opacity-40' />
            <div>
              <motion.h1
                className=' text-6xl font-medium text-box-pri'
                variants={slideUp(0)}
                initial="initial"
                whileInView="animate"
              >4.9/5</motion.h1>
              <p className=' -mt-1 text-lg text-pri/60'>Markey studied</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default TrackRecord