import React, { useState } from 'react'
import { accordions } from '../data/data'
import { Plus, Minus } from "lucide-react"

const WhyUs = () => {
    const [boxOpenId, setBoxOpenId] = useState(-1);
    return (
        <section className=' h-fit relative w-full py-40 px-32 flex justify-between'>
            <img src="/gradbg2.jpg" alt="" className=' absolute w-[50rem] -rotate-[30deg] right-[70%] top-[30%] opacity-70' />
            <h3 className=' text-pri/60 font-medium text-lg sticky top-20 h-fit'>Why Us?</h3>
            <div className="w-1/2">
                {accordions.map((box, index) => (
                    <div key={index} className='py-10 relative cursor-pointer border-t-[0.1px] border-t-pri/15  transition-all duration-300 group' onClick={() => setBoxOpenId(index === boxOpenId ? -1 : index)}>
                        <div className={`flex flex-col justify-center pr-10 ${boxOpenId === index ? "h-20" : "h-9"} relative transition-all duration-300`}>
                            <h1 className={`${boxOpenId === index ? "text-sec" : "text-pri"} text-4xl font-medium group-hover:opacity-40 transition-all duration-300`}>{box.title}</h1>
                            <p className={`${boxOpenId === index ? "block" : "hidden"} text-lg text-pri/40`}>
                                {box.desc}
                            </p>
                        </div>
                        <div className={` absolute right-2 top-9 text-sec ${boxOpenId === index ? "rotate-90 opacity-0" : ""} transition-all duration-500 ease-in-out `}>
                            <Plus size={50} strokeWidth={1} />
                        </div>
                        <div className={` absolute right-2 top-9 text-sec/40 ${boxOpenId === index ? "rotate-0 opacity-1" : " -rotate-45 opacity-0"} transition-all duration-500 ease-in-out `}>
                            <Minus size={50} strokeWidth={1} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyUs