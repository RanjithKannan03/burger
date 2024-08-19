import React from 'react'
import Line from './Line'
import AppFeatures from './AppFeatures'
import Review from './Review'
import { useEffect } from 'react'

const Footer = () => {

  


  return (
    <div>
        <div id='app-section' className='flex justify-center bg-black'>
        <img src='/img/mobile.jpg' className='w-[20%] mr-9'/>

        <div className='flex flex-col justify-center items-start pl-[10rem] w-[40%]'>
        <h1 className='font-roboto-condensed font-semibold text-[2.5rem] text-white leading-none'>DON'T WORRY! YOU CAN ORDER YOUR FOOD JUST BY PHONE!</h1>
        <Line color="border-yellow-300" />
        <h2 className='font-ubuntu text-base text-gray-400'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </h2>

        <div className='grid grid-cols-1 gap-y-5 w-[80%] mt-[1.5rem]'>

        <AppFeatures icon="fa-solid fa-xl fa-truck text-white hover:text-gray-400"/>
        <AppFeatures icon="fa-solid fa-xl fa-money-bill-wave text-white hover:text-gray-400"/>

        </div>

        </div>

        </div>

        <div className='flex justify-evenly items-start bg-black px-[10%] py-[10%]'>
        <div className='flex flex-col items-start justify-start w-[20%]'>
        <span className="py-2 text-5xl font-black font-roboto-condensed whitespace-nowrap text-white dark:text-white">BUR<span className='text-yellow-300'>GRY</span></span>
        <span className='py-2 font-roboto-condensed text-white'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </span>
        </div>

        <div className='w-[10%] flex flex-col items-start justify-start'>
          <h1 className='text-white font-roboto-condensed text-2xl font-bold py-2'>SUPPORT</h1>
          <span className='text-white font-roboto-condensed hover:text-yellow-300 py-2'>FAQ'S</span>
          <span className='text-white font-roboto-condensed hover:text-yellow-300 py-2'>PRIVACY POLICY</span>
          <span className='text-white font-roboto-condensed hover:text-yellow-300 py-2'>TERMS & CONDITIONS</span>
          <span className='text-white font-roboto-condensed hover:text-yellow-300 py-2'>CONTACT</span>
        </div>

        <div className='w-[10%] flex flex-col items-start justify-start'>
        <h1 className='text-white font-roboto-condensed text-2xl font-bold py-2'>PHONE</h1>
        <div className='flex justify-start items-center py-2'>
        <i className='fa-solid fa-phone text-yellow-300 mr-3'/>
        <span className='text-white font-roboto-condensed hover:text-yellow-300'>+91 xxxxx xxxxx</span>
        </div>
        <h1 className='text-white font-roboto-condensed text-2xl font-bold py-2'>EMAIL</h1>
        <div className='flex justify-start items-center py-2'>
        <i className='fa-regular fa-envelope text-yellow-300 mr-3'/>
        <span className='text-white font-roboto-condensed hover:text-yellow-300'>contact@burgry.com</span>
        </div>

        </div>


        <div className='w-[10%] flex flex-col items-start justify-start'>
        <h1 className='text-white font-roboto-condensed text-2xl font-bold py-2'>ADDRESS</h1>
        <div className='flex justify-start items-center py-2'>
        <i className='fa-solid fa-location-dot text-yellow-300 mr-3'/>
        <span className='text-white font-roboto-condensed hover:text-yellow-300'>PLOT NO 4, MADURAI, INDIA</span>
        </div>
        <h1 className='text-white font-roboto-condensed text-2xl font-bold py-2'>FOLLOW US</h1>
        <div className='flex justify-start items-center py-2'>
        <i className='fa-brands fa-facebook-f text-yellow-300 mr-3'/>
        <i className='fa-brands fa-twitter text-yellow-300 mr-3'/>
        <i className='fa-brands fa-instagram text-yellow-300 mr-3'/>
        <i className='fa-brandsr fa-discord text-yellow-300 mr-3'/>
        </div>

        </div>

        

        </div>

    </div>
  )
}

export default Footer