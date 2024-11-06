import React from 'react'

const ReviewCard = ({ tag, review, imgSrc, name, clientRole}) => {
    return (
        <div className=' h-[28rem] p-8 relative flex flex-col justify-between '>
            <img src="/clients/quote.svg" alt="" className=' w-24 absolute top-20 right-8' />

            <div>
                <div className="flex gap-2">
                    <div className=' bg-[#D9E6D7] flex items-center justify-center text-sm text-black/80 rounded-full px-4 py-2'>
                        {tag}
                    </div>
                    <div className='border-2 border-[#D9E6D7] text-sm text-black/80 rounded-full px-4 py-2'>
                        Read more
                    </div>
                </div>

                <p className=' text-ter/80 leading-[1.3rem] text-sm mt-8 relative z-10'>
                    {review}
                </p>
            </div>

            <div className=' flex items-center gap-4 pt-4 border-t border-t-[#D9E6D7]'>
                <div className=' rounded-full size-10 overflow-hidden'>
                    <img src={imgSrc} alt="client" className=' w-full h-full object-cover' />
                </div>

                <div>
                    <h3 className=' text-ter font-semibold text-lg'>{name}</h3>
                    <p className=' text-[.7rem] text-ter/30 uppercase tracking-widest font-medium'>{clientRole}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard