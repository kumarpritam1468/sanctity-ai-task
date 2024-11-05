import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Navigation } from 'swiper/modules';
import { fiverrClients, upworkClients } from '../data/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Reviews = () => {
    const [slide, setSlide] = useState(1);
    const [changing, setChanging] = useState(false);

    const handleSlideChange = () => {
        setChanging(true);
        setSlide(slide === 1 ? 2 : 1);
        setTimeout(() => {
            setChanging(false);
        }, 500);
    }

    return (
        <section className=' h-[110vh] px-36 flex items-center justify-center'>
            <div className="w-1/2 h-full flex flex-col gap-1 justify-center items-start">
                <h1 className=' text-pri text-6xl flex gap-4 font-medium'>
                    <span>Hear</span>
                    <span>it</span>
                    <span>from</span>
                </h1>
                <h1 className=' text-pri text-6xl flex gap-4 font-medium'>
                    <span>our</span>
                    <span>clients</span>
                </h1>

                <div className=' relative grid p-1 grid-cols-2 mt-6 w-64 rounded-full h-14 border-[0.5px] border-pri/20'>
                    <div className={`absolute z-10 top-0 ${slide === 1 ? 'left-0' : ' left-1/2'} m-1 h-12 rounded-full w-32 bg-sec transition-all duration-500 ease-in-out`}></div>

                    <div className=' cursor-pointer relative z-20 h-full w-full flex items-center justify-center' onClick={handleSlideChange}>
                        <h1 className={`text-center ${slide === 1 ? 'text-ter' : 'text-pri'} transition-all duration-500`}>
                            Fiverr
                        </h1>
                    </div>
                    <div className=' cursor-pointer relative z-20 h-full w-full flex items-center justify-center' onClick={handleSlideChange}>
                        <h1 className={`text-center ${slide === 2 ? 'text-ter' : 'text-pri'} transition-all duration-500`}>
                            Upwork
                        </h1>
                    </div>
                </div>
            </div>


            <div className={`w-1/2 px-[4.75rem] relative opacity-0 translate-x-10 translate-y-10 rotate-[6deg] ${changing ? "" : "translate-x-0 translate-y-2 rotate-[0deg] opacity-100"} transition-all duration-500 ease-in-out`}>
                <div className='swiper-button-prev absolute -left-6 top-1/2 z-20 size-10 rounded-full bg-[#1E2421] group cursor-pointer overflow-hidden'>
                    <div className="relative text-pri w-full h-full flex items-center justify-center">
                        <ArrowLeft size={18} strokeWidth={1} className='absolute right-3 group-hover:right-full transition-all duration-300 ease-in-out' />
                        <div className='size-10 absolute flex items-center justify-center rounded-full left-full bg-[#38473F] group-hover:left-0 transition-all duration-300 ease-in-out'>
                            <ArrowLeft size={18} strokeWidth={1} />
                        </div>
                    </div>
                </div>

                <div className='swiper-button-next absolute -right-6 top-1/2 z-20 size-10 rounded-full bg-[#1E2421] flex items-center justify-center group cursor-pointer overflow-hidden'>
                    <div className="relative text-pri w-full h-full flex items-center justify-center">
                        <ArrowRight size={18} strokeWidth={1} className='absolute left-3 group-hover:left-full transition-all duration-300 ease-in-out' />
                        <div className='size-10 absolute flex items-center justify-center rounded-full right-full bg-[#38473F] group-hover:right-0 transition-all duration-300 ease-in-out'>
                            <ArrowRight size={18} strokeWidth={1} />
                        </div>
                    </div>
                </div>



                {slide === 1 &&
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        className="mySwiper"
                    >
                        {fiverrClients.map((client, index) => (
                            <SwiperSlide key={index} className='bg-[#E4ECE3] rounded-3xl border-[1.5px] border-[#E4ECE3]' >
                                <div className=' h-[28rem] p-8 relative flex flex-col justify-between '>
                                    <img src="/clients/quote.svg" alt="" className=' w-24 absolute top-20 right-8' />

                                    <div>
                                        <div className="flex gap-2">
                                            <div className=' bg-[#D9E6D7] flex items-center justify-center text-sm text-black/80 rounded-full px-4 py-2'>
                                                {client.tag}
                                            </div>
                                            <div className='border-2 border-[#D9E6D7] text-sm text-black/80 rounded-full px-4 py-2'>
                                                Read more
                                            </div>
                                        </div>

                                        <p className=' text-ter/80 leading-[1.3rem] text-sm mt-8 relative z-10'>
                                            {client.review}
                                        </p>
                                    </div>

                                    <div className=' flex items-center gap-4 pt-4 border-t border-t-[#D9E6D7]'>
                                        <div className=' rounded-full size-10 overflow-hidden'>
                                            <img src={client.imgSrc} alt="client" className=' w-full h-full object-cover' />
                                        </div>

                                        <div>
                                            <h3 className=' text-ter font-semibold text-lg'>{client.name}</h3>
                                            <p className=' text-[.7rem] text-ter/30 uppercase tracking-widest font-medium'>{client.clientRole}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }



                {slide === 2 &&
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        className="mySwiper"
                    >
                        {upworkClients.map((client, index) => (
                            <SwiperSlide key={index} className='bg-[#E4ECE3] rounded-3xl border-[1.5px] border-[#E4ECE3]' >
                                <div className=' h-[28rem] p-8 relative flex flex-col justify-between '>
                                    <img src="/clients/quote.svg" alt="" className=' w-24 absolute top-20 right-8' />

                                    <div>
                                        <div className="flex gap-2">
                                            <div className=' bg-[#D9E6D7] flex items-center justify-center text-sm text-black/80 rounded-full px-4 py-2'>
                                                {client.tag}
                                            </div>
                                            <div className='border-2 border-[#D9E6D7] text-sm text-black/80 rounded-full px-4 py-2'>
                                                Read more
                                            </div>
                                        </div>

                                        <p className=' text-ter/80 leading-[1.3rem] text-sm mt-8 relative z-10'>
                                            {client.review}
                                        </p>
                                    </div>

                                    <div className=' flex items-center gap-4 pt-4 border-t border-t-[#D9E6D7]'>
                                        <div className=' rounded-full size-10 overflow-hidden'>
                                            <img src={client.imgSrc} alt="client" className=' w-full h-full object-cover' />
                                        </div>

                                        <div>
                                            <h3 className=' text-ter font-semibold text-lg'>{client.name}</h3>
                                            <p className=' text-[.7rem] text-ter/30 uppercase tracking-widest font-medium'>{client.clientRole}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>
        </section>
    )
}

export default Reviews