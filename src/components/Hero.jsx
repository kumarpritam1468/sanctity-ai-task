import React from 'react'

const Hero = () => {
  return (
    <>
      <section className=' pt-16 pb-4 px-4 h-screen overflow-hidden hero-box'>
        <img src="/gradbg1.png" alt="bg" className=' absolute -top-1/2 2xl:-top-32 left-[35%] 2xl:left-[45%]' />
        <img src="/gradbg1.png" alt="bg" className=' absolute -rotate-[140deg] 2xl:-rotate-[130deg] -top-20 2xl:top-0 right-1/2 2xl:right-[55%]' />
        {/* <img src="/svg4.svg" alt="svg" className="absolute right-4 bottom-4 w-20 z-50" /> */}

        <div className=' h-full w-full bg-black/20 relative z-10 rounded-3xl flex items-center justify-center'>
          <div>
            <p className=' text-sm mt-6 font-semibold text-[#6B766A] text-center'>Competitive Edge through Creativity & Technology</p>
            <div className=' flex gap-4 items-center mr-32 -mt-2'>
              <h1 className=' text-pri text-[5.2rem] font-medium'>
                Market Insights
              </h1>
              <div className=' flex items-center justify-center h-16 px-10 pt-5 mt-4 rounded-full bg-[#262E29] text-6xl text-sec'>
                *
              </div>
            </div>

            <div className=' flex items-center gap-8 -mt-8 ml-48 w-full '>
              <div className=" h-16 w-60 rounded-full mt-4 overflow-hidden">
                <img src="/hero-mid.jpg" alt="Hero center" className=' h-full w-full object-cover' />
              </div>
              <h1 className=' text-pri text-[5.2rem] font-medium'>
                that
              </h1>
              <div className=' relative w-full'>
                <span className=' text-sec text-[5.2rem] font-medium absolute -top-16'>
                  Make a
                </span>
              </div>
            </div>


            <div className="relative -mt-8 ml-28">
              <h1 className=' text-sec text-[5.2rem] font-medium'>
                Difference
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className=" h-screen pt-[calc(100vh-64px)]"></section>
    </>
  )
}

export default Hero