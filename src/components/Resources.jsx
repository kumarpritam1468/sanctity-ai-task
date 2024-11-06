import { ArrowRight, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { resources } from '../data/data'

const Resources = () => {
    return (
        <section className=' relative z-10 h-fit bg-white rounded-3xl mx-4 p-4 mt-16'>
            <div className=' flex flex-col gap-8 items-center justify-center py-20 px-32'>
                <div className=' flex w-full justify-between items-center'>
                    <h1 className=' text-6xl font-medium text-ter'>Our latest resources</h1>
                    <div className=' size-12 bg-[#E4ECE3] relative group cursor-pointer rounded-full flex items-center justify-center overflow-hidden'>
                        <ArrowRight size={26} strokeWidth={1} className=' text-ter group-hover:translate-x-10 transition-all duration-300' />
                        <div className='absolute size-12 bg-[#38473F] -translate-x-12 group-hover:-translate-x-0 transition-all duration-300 rounded-full flex items-center justify-center'>
                            <ArrowRight size={26} strokeWidth={1} className=' text-pri -translate-x-6 group-hover:translate-x-0 transition-all duration-300 delay-150' />
                        </div>
                    </div>
                </div>

                <div className=' grid grid-cols-3 gap-6 w-full'>
                    {resources.map((resource, index) => (
                        <div key={index} className=' flex flex-col gap-2'>
                            <div className=' h-48 w-full rounded-2xl overflow-hidden group relative flex items-center justify-center cursor-pointer'>
                                <img src={`/resources/rsc${index + 1}.jpg`} alt="Resource Image" className=' h-full w-full object-cover scale-125 group-hover:scale-[1.15] transition-all duration-500 ease-in-out' />

                                <img src="/svg5.svg" alt="" className=' absolute -top-12 -right-12 group-hover:top-0 group-hover:right-0 transition-all duration-500 ease-in-out z-20 size-14' />

                                <ArrowUpRight size={22} strokeWidth={1.5} className=' text-ter/70 absolute opacity-20 scale-50 group-hover:opacity-100 group-hover:scale-100 z-30 top-5 right-5 group-hover:top-2 group-hover:right-2 transition-all duration-500 ease-in-out' />

                                <div className=' absolute top-0 left-0 bg-black/20 opacity-0 group-hover:opacity-100 h-full w-full z-10 group-hover:backdrop-blur-md transition-all duration-500'></div>

                                <p className=' absolute z-50 text-pri/60 text-sm translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
                                    Read more
                                </p>
                            </div>

                            <div className=' flex justify-between '>
                                <p className=' text-ter/40 text-xs'>Blog</p>
                                <p className=' text-ter/40 text-xs'>{resource.date}</p>
                            </div>

                            <h2 className=' text-2xl text-ter font-medium'>
                                {resource.title}
                            </h2>

                            <div className=' py-2 px-4 w-fit bg-sec/15 rounded-full text-ter/70 text-xs mt-3'>
                                {resource.tag}
                            </div>
                        </div>
                    ))}
                </div>

            </div>


            <div className=' bg-[#D5EDD1] w-full h-64 grid grid-cols-2 gap-x-6 px-32 py-8 rounded-2xl'>
                <div className=' flex flex-col justify-between'>
                    <h2 className=' text-ter font-medium text-4xl'>
                    Don't want to <br />
                    miss anything?
                    </h2>

                    <input type="email" placeholder='Email' className=' w-full h-10 text-ter bg-transparent outline-none border-b border-ter/30' />
                </div>

                <div className=' flex flex-col justify-between'>
                    <h2 className=' text-ter/40 font-medium'>
                    Sign up for our newsletter to discover <br /> winning trends before your competition!
                    </h2>

                    <div className="w-full h-8 cursor-pointer relative overflow-hidden text-ter bg-transparent outline-none border-b border-ter/30 group">
                        <p className=' group-hover:translate-x-8 font-medium transition-all duration-300'>Subscribe</p>
                        <ArrowRight size={22} strokeWidth={1.5} className=' text-sec absolute right-2 top-0 group-hover:-right-6 transition-all duration-300' />
                        <ArrowRight size={22} strokeWidth={1.5} className=' text-sec absolute -left-6 top-0 group-hover:left-0 transition-all duration-300' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources