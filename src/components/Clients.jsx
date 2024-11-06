import React from 'react'
import { motion } from "framer-motion"
import { Plus } from 'lucide-react'

const Clients = () => {

    const popUp = () => {
        return {
            initial: {
                scale: 0.3,
                // opacity: 0
            },
            animate: {
                scale: 1,
                // opacity: 1,
                transition: {
                    type: "spring",
                    duration: .3,
                    delay: 0
                }
            }
        }
    }

    return (
        <section className=' relative z-10 mx-4 h-[105vh] bg-pri rounded-3xl grid grid-cols-6 grid-rows-3 gap-4 p-4 mb-40'>
            <div className=' col-span-2 rounded-xl border border-ter/30 py-5 px-4 text-4xl text-ter font-medium'>
                Who trusts us?
            </div>

            <motion.div
                className='rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/ms.png" alt="Microsoft" className=' w-28 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>

            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/indeed.png" alt="Microsoft" className=' w-20 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <div className=' col-span-1'></div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/upwork.png" alt="Microsoft" className=' w-24 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <div className=' col-span-1'></div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/fiverr.png" alt="Microsoft" className=' w-20 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <div className=' col-span-1'></div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/ansell.png" alt="Microsoft" className=' w-24 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/tipalti.png" alt="Microsoft" className=' w-20 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/estrid.png" alt="Microsoft" className=' w-24 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/imaginario.png" alt="Microsoft" className=' w-28 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300' />
            </motion.div>


            <div className=' col-span-1'></div>


            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/presidio.png" alt="Microsoft" className=' w-24 saturate-0 brightness-75 opacity-60 group-hover:brightness-100 group-hover:opacity-100 group-hover:saturate-100 transition-all duration-300' />
            </motion.div>

            <div className=' col-span-1'></div>

            <motion.div
                className=' rounded-xl bg-black/5 flex items-center justify-center hover:bg-[#E7F4E4] transition-all duration-300 group'
                variants={popUp()}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <img src="/clients/wedo.png" alt="Microsoft" className=' w-28 brightness-0 opacity-60 group-hover:brightness-100 group-hover:opacity-100 group-hover:invert transition-all duration-300' />
            </motion.div>


            <div className=' absolute pt-2 flex text-sec items-center justify-center gap-1 bottom-0 right-0 cursor-pointer w-36 h-12 rounded-tl-3xl bg-[#272D29] group'>
                <Plus strokeWidth={1.5} size={24} className=' group-hover:rotate-90 transition-all duration-500 ease-in-out' />
                <h1 className=' text-pri/70'>Load More</h1>
            </div>

            <img src="/svg7.svg" alt="" className=' -rotate-[180deg] w-6 absolute bottom-12 right-0' />
            <img src="/svg7.svg" alt="" className=' -rotate-[180deg] w-4 absolute bottom-0 right-36' />

        </section>
    )
}

export default Clients