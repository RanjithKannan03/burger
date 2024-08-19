import React from 'react'

const Review = (props) => {
  return (
    <div className='flex flex-col items-start bg-black rounded-lg py-8 px-2'>
    <h2 className='font-ubuntu text-base text-gray-400'>
        {props.review}
    </h2>
    <div className='flex mt-[1.5rem] justify-start items-center'>
    <img src={props.pic} className='rounded w-[20%] overflow-hidden' />
    <h1 className='font-roboto-condensed font-semibold text-[1.5rem] pl-4 text-white leading-none'>{props.name}</h1>
    </div>
    </div>
  )
}

export default Review