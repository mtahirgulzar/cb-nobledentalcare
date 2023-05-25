import React from 'react'

export default function Team({data}) {
  return (
    <div className='bg-[#269486]'>
        <div className='max-w-[1140px] mx-auto px-4 flex justify-between py-[80px]'>
            <div>
                <h3 className='text-[24px] leading-6 text-[#fff] font-semibold'>{data?.title}</h3>
            </div>
            <div>
                <img src="/images/home/team.webp" alt="team" loading='lazy' />
            </div>
        </div>
    </div>
  )
}
