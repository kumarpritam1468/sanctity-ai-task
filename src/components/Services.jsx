import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import {servicesCards} from "../data/data.js"
import { ArrowUpRight } from "lucide-react";

const Services = () => {
    const ref1 = useRef();

    const { scrollYProgress } = useScroll({
        target: ref1,
        offset: ["start start", "end start"],
    });

    const moveX = useTransform(scrollYProgress, [0, 0.8, 1], ['0rem', '-105rem', '-105rem']);

    return (
        <section className=' h-[400vh] w-full relative z-10 pt-40 mb-40' ref={ref1}>
            <div className=' sticky top-28'>
                <h1 className=' text-pri text-9xl font-medium ml-36'>Services</h1>

                <div className=' flex gap-4 w-max relative top-6 left-[60%]'>
                    {servicesCards.map((card, index) => (
                        <motion.div className=' size-64 bg-[#35413A] rounded-3xl py-4 px-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer' key={index} style={{ x: moveX }}>
                            <div className={`text-sec relative z-30 group-hover:text-gray-600`} dangerouslySetInnerHTML={{ __html: card.icon }}>
                            </div>

                            <div className=' relative z-30'>
                                <h2 className={`text-pri/70 text-xl font-medium group-hover:text-slate-700 group-hover:-translate-y-20`}>
                                    {card.title}
                                </h2>
                                <p className=' absolute -bottom-20 group-hover:bottom-2 text-sm  text-pri/50 group-hover:text-gray-700/60 transition-all duration-500 divide-red-300'>
                                    {card.desc}
                                </p>
                            </div>

                            <div className=' absolute z-30 top-4 right-4 text-[#6B766A]/60 group-hover:translate-x-1 group-hover:-translate-y-1 
                         group-hover:text-pri/50 transition-all duration-300'>
                                <ArrowUpRight />
                            </div>

                            <img src="/svg2.svg" alt="" className=' absolute z-20 -top-12 -right-12 size-[4.4rem] group-hover:-top-0.5 group-hover:-right-0.5 transition-all duration-500 ease-in-out' />

                            <div className=' size-64 absolute z-10 top-full group-hover:top-0 transition-all duration-500 ease-in-out left-0 bg-sec'>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services