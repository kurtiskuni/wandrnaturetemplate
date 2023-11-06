import React from 'react'
import Layout from './components/Layout'
import './styles/global.css'

export default function Morocco() {
  return (
    <Layout>
        <div className="relative h-[90vh] xl:h-screen">
          <div className="absolute w-full h-full bg-cover bg-right xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('../images/morocco-hero.jpg')]">
          {/* <div className="absolute linear-background h-full w-full"></div> */}
            <div className="m-container">
                <h3 className='font-primary font-medium text-2xl text-center bottom-10 inset-x-0 xl:text-5xl absolute z-10 text-white'>Morocco ﺍَﻟﻤَﻐﺮِﺏ</h3>
            </div>
          </div>
        </div>
        <section className=' bg-[#151E1E] text-white'>
            <div className='m-container py-24 xl:flex xl:gap-[15%]'>
                <h2 className='text-2xl font-primary mb-8 xl:w-3/5 xl:text-3xl'>Morocco is renowned for its unique geographical diversity, encompassing everything from coastal areas along the Atlantic and Mediterranean oceans to the rugged Atlas Mountains and the expansive Sahara Desert. </h2>
                <div>
                    <h3 className='text-xl font-medium  mb-4'>Reasons to visit</h3>
                    <p className='font-thin text-lg'>Diverse Landscapes</p>
                    <p className='font-thin text-lg'>Cultural Riches</p>
                    <p className='font-thin text-lg'>Majestic Marrakech</p>
                    <p className='font-thin text-lg'>Fes Medina</p>
                    <p className='font-thin text-lg'>Stunning Architecture</p>
                    <p className='font-thin text-lg'>Colorful Souks</p>
                    <p className='font-thin text-lg'>The Sahara Adventure</p>
                </div>
            </div>
        </section>
        <section className='flex'>
            <div className="relative h-[90vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-right xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('../images/morocco-hero.jpg')]">
                <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>Ultimate 10 Day Morocco Itinerary for young travelers</h3>
                    </div>
                </div>
            </div>
            <div className="relative h-[90vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-right xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('../images/morocco-hero.jpg')]">
                <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>9 useful tips when visiting Paradise Valley near Agadir</h3>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-[#151E1E] text-white relative'>
        <img className="absolute w-[1.5rem] right-2 bottom-2 xl:right-6 xl:top-6 xl:w-[2rem]" src="/side-logo.svg" alt="" />
          <div className="m-container py-40 pt-16 xl:py-24">
            <div className='md:w-[60%] xl:w-[50%]'>
              <h2 className='font-primary text-2xl xl:text-4xl mb-6'>Want exclusive information about our upcoming itineraries and unique trip ideas?</h2>
              <p className='mb-6 text-lg'>Join our value packed newsletter</p>
              <input type="text" name="" id="" placeholder='Enter your name' className='block w-full mb-2 text-sm rounded-md bg-transparent border border-[#679698] py-1 px-2 placeholder-primary::placeholder' />
              <input type="text" name="" id="" placeholder='Enter your email' className='block w-full text-sm mb-4 rounded-md bg-transparent border border-[#679698] py-1 px-2' />
              <button type="submit" className='mb-2 w-[118px] h-[30px] bg-[#679698] rounded-lg text-sm'>Submit</button>
            </div>

            </div>
        </section>
    </Layout>
  )
}