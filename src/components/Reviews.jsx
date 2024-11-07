import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules';
import { fiverrClients, upworkClients } from '../data/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReviewCard from './ReviewCard';

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

    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        if (swiper) {
            swiper.on('reachBeginning', () => {
                // Disable previous button
                document.querySelector('.swiper-button-prev').disabled = true;
            });

            swiper.on('reachEnd', () => {
                // Disable next button
                document.querySelector('.swiper-button-next').disabled = true;
            });

            swiper.on('slideChange', () => {
                // Enable/disable buttons based on current slide
                if (swiper.isBeginning) {
                    document.querySelector('.swiper-button-prev').disabled = true;
                } else {
                    document.querySelector('.swiper-button-prev').disabled = false;
                }

                if (swiper.isEnd) {
                    document.querySelector('.swiper-button-next').disabled = true;
                } else {
                    document.querySelector('.swiper-button-next').disabled = false;
                }
            });
        }
    }, [swiper]);


    return (
        <section className=' relative h-fit pb-32 px-36 max-md:px-6 flex max-md:flex-col max-md:gap-32 items-center justify-center'>

            <div className="w-1/2 max-md:w-full h-full max-md:h-1/3 flex flex-col gap-1 justify-center items-start">

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


            <div className={`w-1/2 max-md:w-full px-[4.75rem] max-md:px-24 max-md:scale-[1.4] relative z-10  ${changing ? "opacity-0 translate-x-10 translate-y-10 rotate-[6deg]" : "translate-x-0 translate-y-2 rotate-[0deg] opacity-100"} transition-all duration-500 ease-in-out`}>

                <button className='swiper-button-prev absolute max-md:hidden -left-6 top-1/2 z-20 size-10 rounded-full bg-[#1E2421] group cursor-pointer overflow-hidden disabled:cursor-not-allowed disabled:opacity-40'>

                    <div className="relative text-pri w-full h-full flex items-center justify-center">
                        <ArrowLeft size={18} strokeWidth={1} className='absolute right-3 group-hover:right-full transition-all duration-300 ease-in-out' />
                        <div className='size-10 absolute flex items-center justify-center rounded-full left-full bg-[#38473F] group-hover:left-0 transition-all duration-300 ease-in-out'>
                            <ArrowLeft size={18} strokeWidth={1} />
                        </div>
                    </div>

                </button>


                <button className='swiper-button-next absolute max-md:hidden -right-6 top-1/2 z-20 size-10 rounded-full bg-[#1E2421] flex items-center justify-center group cursor-pointer overflow-hidden disabled:cursor-not-allowed disabled:opacity-40'>

                    <div className="relative text-pri w-full h-full flex items-center justify-center">
                        <ArrowRight size={18} strokeWidth={1} className='absolute left-3 group-hover:left-full transition-all duration-300 ease-in-out' />
                        <div className='size-10 absolute flex items-center justify-center rounded-full right-full bg-[#38473F] group-hover:right-0 transition-all duration-300 ease-in-out'>
                            <ArrowRight size={18} strokeWidth={1} />
                        </div>
                    </div>

                </button>



                {slide === 1 &&
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className="mySwiper"
                    >
                        {fiverrClients.map((client, index) => (
                            <SwiperSlide key={index} className='bg-[#E4ECE3] rounded-3xl border-[1.5px] border-[#E4ECE3]' >
                                <ReviewCard tag={client.tag} review={client.review} imgSrc={client.imgSrc} name={client.name} clientRole={client.clientRole} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }



                {slide === 2 &&
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation, Autoplay]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        className="mySwiper"
                    >
                        {upworkClients.map((client, index) => (
                            <SwiperSlide key={index} className='bg-[#E4ECE3] rounded-3xl border-[1.5px] border-[#E4ECE3]' >
                                <ReviewCard tag={client.tag} review={client.review} imgSrc={client.imgSrc} name={client.name} clientRole={client.clientRole} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>

            <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[120deg] 2xl:-rotate-[130deg] top-72 right-[50%] opacity-60' />
        </section>
    )
}

export default Reviews