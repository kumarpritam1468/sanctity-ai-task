import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { ArrowRight } from 'lucide-react'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const FooterBoxes = () => {
    return (
        <>
            <div className=' bg-black/20 backdrop-blur-3xl rounded-3xl p-6 flex flex-col justify-between group overflow-hidden cursor-pointer relative max-md:h-[50vw]'>

                <div className=' size-11 relative bg-[#282E2A] rounded-full flex items-center justify-center text-pri/60 overflow-hidden'>
                    <FontAwesomeIcon icon={faUpwork} className=' relative z-20 group-hover:text-ter' />
                    <div className=' absolute top-full size-11 bg-box-pri group-hover:top-0 transition-all duration-300 rounded-full'></div>
                </div>

                <p className=' text-3xl font-medium text-pri/70 lg:group-hover:translate-x-8 transition-all duration-300'>UpWork</p>

                <ArrowRight size={32} className=' text-pri/20 absolute -left-7 bottom-7 group-hover:left-4 transition-all duration-300 max-lg:hidden' />
            </div>


            <div className=' bg-black/20 backdrop-blur-3xl rounded-3xl p-6 flex flex-col justify-between group overflow-hidden cursor-pointer relative max-md:h-[50vw]'>
                <div className=' size-11 relative bg-[#282E2A] rounded-full flex items-center justify-center text-pri/60 overflow-hidden'>
                    {/* <FontAwesomeIcon icon={faUpwork} className=' relative z-20 group-hover:text-ter' /> */}
                    <p className=' relative z-20 w-4 group-hover:text-ter text-center font-bold' >fi</p>
                    <div className=' absolute top-full size-11 bg-box-pri group-hover:top-0 transition-all duration-300 rounded-full'></div>
                </div>

                <p className=' text-3xl font-medium text-pri/70 lg:group-hover:translate-x-8 transition-all duration-300'>Fiverr</p>

                <ArrowRight size={32} className=' text-pri/20 absolute -left-7 bottom-7 group-hover:left-4 transition-all duration-300 max-lg:hidden' />
            </div>


            <div className=' bg-black/40 backdrop-blur-3xl rounded-3xl p-6 flex flex-col justify-between group overflow-hidden cursor-pointer relative max-md:h-[50vw]'>
                <div className=' size-11 relative bg-[#282E2A] rounded-full flex items-center justify-center text-pri/60 overflow-hidden'>
                    <FontAwesomeIcon icon={faLinkedinIn} className=' relative z-20 group-hover:text-ter' />
                    <div className=' absolute top-full size-11 bg-box-pri group-hover:top-0 transition-all duration-300 rounded-full'></div>
                </div>

                <p className=' text-3xl font-medium text-pri/70 lg:group-hover:translate-x-8 transition-all duration-300'>LinkedIn</p>

                <ArrowRight size={32} className=' text-pri/20 absolute -left-7 bottom-7 group-hover:left-4 transition-all duration-300 max-lg:hidden' />
            </div>


            <div className=' bg-black/20 backdrop-blur-3xl rounded-3xl p-6 flex flex-col justify-between group overflow-hidden cursor-pointer relative max-md:h-[50vw]'>
                <div className=' size-11 relative bg-[#282E2A] rounded-full flex items-center justify-center text-pri/60 overflow-hidden'>
                    <FontAwesomeIcon icon={faCalendar} className=' relative z-20 group-hover:text-ter' />
                    <div className=' absolute top-full size-11 bg-box-pri group-hover:top-0 transition-all duration-300 rounded-full'></div>
                </div>

                <p className=' text-3xl font-medium text-pri/70 lg:group-hover:translate-x-8 transition-all duration-300'>Book a meeting</p>

                <ArrowRight size={32} className=' text-pri/20 absolute -left-7 bottom-7 group-hover:left-4 transition-all duration-300 max-lg:hidden' />
            </div></>
    )
}

export default FooterBoxes