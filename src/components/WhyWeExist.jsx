import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'

const WhyWeExist = () => {
    const paragraph = "At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success.";

    const words = paragraph.split(" ");

    const pref = useRef();

    const { scrollYProgress } = useScroll({
        target: pref,
        offset: ["start 0.8", "start start"],
    });

    console.log(scrollYProgress.get());

    return (
        <section className=" h-fit pt-[calc(100vh-150px)] max-md:pt-[70vh] w-full px-32 max-md:px-6 relative z-10 pb-24">
            <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[130deg] 2xl:-rotate-[130deg] -z-10 top-96 right-[60%] opacity-60' />

            <div className='h-0.5 w-full bg-ter '></div>

            <div className="flex max-md:flex-col w-full justify-between mt-10 relative">
                <p className=' text-pri sticky top-20 h-fit max-md:ml-6 max-md:text-4xl mb-12'>Why we exist?</p>
                <h2 className=' font-medium w-1/2 max-md:w-full max-md:px-4 text-[2.6rem] leading-[3.2rem] ' ref={pref}>
                    {words.map((word, index) => {
                        const chars = word.split("");
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        const step = (end - start) / word.length;
                        return (
                            <span
                                key={index}
                                className={` text-pri`}
                            >
                                {chars.map((char, index) => {
                                    const childStart = start + index * step;
                                    const childEnd = start + (index + 1) * step;
                                    const opacity = useTransform(scrollYProgress, [childStart, childEnd], [0.2, 0.8]);
                                    console.log([childStart, childEnd]);
                                    return (
                                        <motion.span
                                            key={index}
                                            style={{ opacity }}
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                                {" "}
                            </span>
                        )
                    })}
                </h2>
            </div>
        </section>
    )
}

export default WhyWeExist