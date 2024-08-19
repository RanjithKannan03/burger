import React from 'react'
import Navbar from '../components/Navbar'
import FeaturesCard from '../components/FeaturesCard'
import Line from '../components/Line'
import Feature from '../components/Feature'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='bg-background bg-cover bg-bottom pt-10' id='header-section'>
        <Navbar/>
        <div className='flex justify-center p-10'>
            <img src="/img/burger-header.png" className='w-[35%] pr-20'/>
            <div className='flex flex-col justify-center items-start w-[40%] pl-20'>
                <h1 className='font-roboto-condensed font-semibold text-6xl text-white'>ROCK YOUR TUMMY WITH A BURGER!</h1>
                <Line color='border-yellow-300'/>
                <h2 className='font-ubuntu text-base text-gray-400'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
                </h2>
                <div className='grid grid-cols-3 w-full px-2 py-2 mt-[1.5rem]'>
                <FeaturesCard icon="fa-solid fa-utensils fa-2xl text-yellow-300" text="Delicious"/>
                <FeaturesCard icon="fa-solid fa-droplet fa-2xl text-yellow-300" text="Fresh"/>
                <FeaturesCard icon="fa-solid fa-leaf fa-2xl text-yellow-300" text="Organic"/>
                </div>
                <div className='pt-6'>
                <button type="button" class="focus:outline-none text-black rounded-sm w-32 h-12 font-roboto font-base bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Learn More</button>
                </div>
            </div>
        </div>
        </div>

        <div id='about-memo' className='bg-black p-48'>

        <div className='flex justify-center mr-5'>

        <img src='/img/burger-1.jpg' className='w-[40%] rounded-lg' />

        <div className='flec flex-col justify-center items-start pl-16 w-[45%]'>
        <h1 className='text-white font-roboto-condensed font-semibold text-[2.5rem] leading-none'>DISCOVER TOP-QUALITY FOOD AND BEVERAGES ALL IN ONE SPOT</h1>
        <Line color="border-yellow-300"/>
        <h2 className='font-ubuntu text-base text-gray-400'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </h2>
        
        <div className='grid grid-cols-2 w-full mt-[1.5rem] gap-y-4'>
        <Feature text=" Best Price"/>
        <Feature text=" Best Service"/>
        <Feature text=" Fresh Food"/>
        <Feature text=" Thoroughly Safe"/>

        </div>


        </div>

        </div>

        </div>

        <Footer/>



    </div>
  )
}

export default Home
