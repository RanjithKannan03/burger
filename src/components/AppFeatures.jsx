import React from 'react'

const AppFeatures = (props) => {
  return (
    <div className='bg-[#171717] flex justify-start items-center h-[5.5rem] p-5 rounded-lg'>
    <div className='flex justify-center items-center w-[4rem] h-[4rem] bg-yellow-300 rounded-lg'>
        <i className={props.icon}/>
    </div>
    <h1 className='text-white font-roboto-condensed font-semibold text-2xl pl-4'>FREE DELIVERY</h1>
    </div>
  )
}

export default AppFeatures