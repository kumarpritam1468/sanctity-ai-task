import React from 'react'
import FooterBoxes from './FooterBoxes'
import { ArrowUp, Copy } from 'lucide-react'

const Footer = () => {
    return (
        <section className=" h-fit bg-transparent backdrop-blur-lg relative z-10 overflow-y-hidden p-4 flex flex-col gap-4">
            <img src="/gradbg2.jpg" alt="" className=' absolute w-[50rem] -rotate-[30deg] right-[75%] top-[1%] opacity-50 blur-3xl' />


            <div className=' w-full h-[102vh] flex gap-4 relative z-20'>
                <div className=' w-1/2 grid grid-cols-2 grid-rows-2 gap-4'>
                    <FooterBoxes />
                </div>

                <div className=' w-1/2 bg-black/20 rounded-3xl size-full flex flex-col justify-between p-6'>
                    <div>
                        <h2 className=' text-4xl font-medium text-pri'>
                            Interested but don't <br /> know where to start?
                        </h2>

                        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-28 mt-6">
                            <input type="text" placeholder="Name*" className=" bg-[#282E2A] rounded-2xl px-4 text-pri ring-[1.2px] ring-transparent hover:ring-pri/25 focus:ring-sec focus:outline-none placeholder:text-pri/25" />
                            <input type="text" placeholder="Email*" className=" bg-[#282E2A] rounded-2xl px-4 text-pri ring-[1.2px] ring-transparent hover:ring-pri/25 focus:ring-sec focus:outline-none placeholder:text-pri/25" />
                            <input type="text" placeholder="Phone" className=" bg-[#282E2A] rounded-2xl px-4 text-pri ring-[1.2px] ring-transparent hover:ring-pri/25 focus:ring-sec focus:outline-none placeholder:text-pri/25" />
                            <input type="text" placeholder="Subject*" className=" bg-[#282E2A] rounded-2xl px-4 text-pri ring-[1.2px] ring-transparent hover:ring-pri/25 focus:ring-sec focus:outline-none placeholder:text-pri/25" />
                        </div>

                        <textarea type="text" placeholder="Your Message*" className="h-28 w-full resize-none p-4 mt-3 bg-[#282E2A] rounded-2xl px-4 text-pri ring-[1.2px] ring-transparent hover:ring-pri/25 focus:ring-sec focus:outline-none placeholder:text-pri/25 " />

                        <button className=' w-full h-14 flex items-center justify-center text-black/80 bg-box-pri rounded-2xl mt-2 text-[1.05rem] relative group overflow-hidden' >
                            Send Message

                            <div className=' absolute size-40 bg-black/10 rounded-full top-full group-hover:top-0 group-hover:w-full group-hover:rounded-2xl transition-all duration-300'></div>
                        </button>
                    </div>


                    <div className=' w-full '>
                        <p className=' text-pri/25 text-xs'>Or email us at:</p>
                        <div className=' w-full h-14 rounded-2xl border-[1.5px] border-pri/20 flex items-center justify-between px-4 mt-1'>
                            <Copy className=' text-pri/45 cursor-pointer' />
                            <p className=' text-pri/75'>hristo@addifico.com</p>
                            <div></div>
                        </div>
                    </div>

                </div>

            </div>


            <div className=' bg-black/40 backdrop-blur-3xl rounded-3xl px-6 h-36'>
                <div className=' h-1/2 w-full flex justify-between items-center'>
                    <div className=' flex gap-4'>
                        <p className=' text-pri/60 '>Services</p>
                        <p className=' text-pri/25'>/</p>
                        <p className=' text-pri/60 '>Resources</p>
                        <p className=' text-pri/25'>/</p>
                        <p className=' text-pri/60 '>About</p>
                        <p className=' text-pri/25'>/</p>
                        <p className=' text-pri/60 '>Get in touch</p>
                    </div>

                    <div className=' flex gap-4'>
                        <p className=' text-pri/60 '>Twitter</p>
                        <p className=' text-pri/25'>/</p>
                        <p className=' text-pri/60 '>Instagram</p>
                        <p className=' text-pri/25'>/</p>
                        <p className=' text-pri/60 '>Facebook</p>
                    </div>
                </div>

                <div className=' h-[1.2px] w-full bg-pri/20'></div>

                <div className=' h-1/2 w-full flex justify-between items-center'>
                    <div className=' flex gap-1'>
                        <p className=' text-pri/25'>Design and development by</p>
                        <p className=' text-pri/60 '>Pritam Kumar Manohari</p>
                    </div>

                    <div className=' flex gap-4 items-center'>
                        <p className=' text-pri/30 tracking-tight'>&copy;2024 All Rights reserved</p>
                        <a href="#hero" className=' rounded-full size-8 hover:size-9 transition-all duration-300 bg-[#2B352F] ml-4 flex items-center justify-center'>
                            <ArrowUp size={16} className=' text-sec' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer