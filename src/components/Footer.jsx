import React from 'react'
import FooterBoxes from './FooterBoxes'
import { ArrowUp, Copy } from 'lucide-react'

const Footer = () => {
    return (
        <section className=" h-fit bg-transparent backdrop-blur-lg relative z-10 overflow-y-hidden p-4 max-md:p-2 flex flex-col gap-4">
            <img src="/gradbg2.jpg" alt="" className=' absolute w-[50rem] -rotate-[30deg] right-[75%] top-[1%] opacity-50 blur-3xl' />


            <div className=' w-full h-[102vh] max-md:h-fit max-md:mt-4 flex max-md:flex-col-reverse gap-4 relative z-20'>
                <div className=' w-1/2 max-md:w-full grid grid-cols-2 grid-rows-2 gap-4'>
                    <FooterBoxes />
                </div>

                <div className=' w-1/2 max-md:w-full bg-black/20 rounded-3xl size-full max-md:h-fit flex flex-col max-md:gap-4 justify-between p-6 max-md:p-4'>
                    <div>
                        <h2 className=' text-4xl font-medium text-pri max-md:mt-8'>
                            Interested but don't <br /> know where to start?
                        </h2>

                        <div className="grid grid-cols-2 max-md:grid-cols-1 grid-rows-2 max-md:grid-rows-4 gap-3 h-28 max-md:h-72 mt-6">
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




            <div className=' bg-black/40 backdrop-blur-3xl rounded-3xl px-6 max-md:px-2  h-36 max-md:h-fit'>
                <div className=' h-1/2 max-md:h-fit w-full flex justify-between items-center max-md:items-start'>
                    <div className=' flex gap-4 max-md:flex-col max-md:mt-6 max-md:ml-4 '>
                        <p className=' text-pri/60 '>Services</p>
                        <p className=' text-pri/25 max-md:hidden'>/</p>
                        <p className=' text-pri/60 '>Resources</p>
                        <p className=' text-pri/25 max-md:hidden'>/</p>
                        <p className=' text-pri/60 '>About</p>
                        <p className=' text-pri/25 max-md:hidden'>/</p>
                        <p className=' text-pri/60 '>Get in touch</p>
                    </div>

                    <div className=' flex gap-4 max-md:flex-col max-md:mt-6 max-md:mr-4 text-right'>
                        <p className=' text-pri/60 '>Twitter</p>
                        <p className=' text-pri/25 max-md:hidden'>/</p>
                        <p className=' text-pri/60 '>Instagram</p>
                        <p className=' text-pri/25 max-md:hidden'>/</p>
                        <p className=' text-pri/60 '>Facebook</p>
                    </div>
                </div>

                <div className=' h-[1.2px] max-md:h-[.8px] w-full bg-pri/20 max-md:px-4 max-md:mt-16 max-md:mb-12'></div>

                <div className=' h-1/2 w-full flex max-md:flex-col max-md:gap-6 max-md:mb-6 justify-between items-center'>
                    <div className=' flex gap-1'>
                        <p className=' text-pri/25'>Development by</p>
                        <p className=' text-pri/60 '>Pritam Kumar Manohari</p>
                    </div>

                    <div className=' flex gap-4 items-center'>
                        <p className=' text-pri/30 tracking-tight'>&copy;2024 All Rights reserved</p>
                        <a href="#hero" className=' rounded-full size-8 hover:size-9 max-md:size-12 max-md:hover:size-12 transition-all duration-300 bg-[#2B352F] ml-4 flex items-center justify-center'>
                            <ArrowUp size={16} className=' text-sec' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer