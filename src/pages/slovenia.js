import React from 'react'
import { Link } from 'gatsby';
import Layout from './components/Layout'
import './styles/global.css'

export default function Slovenia() {
  return (
    <Layout>
        <div className="relative h-[90vh] xl:h-screen">
          <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/36wkuDI9kQkeYqHe8XcV4B/0532f578c38449a539749253d9173874/Lake_Bled_from_above.jpg')]">
          {/* <div className="absolute linear-background h-full w-full"></div> */}
            <div className="m-container">
                <h3 className='font-primary font-medium text-2xl text-center bottom-10 inset-x-0 xl:text-5xl absolute z-10 text-white'>Slovenia</h3>
            </div>
          </div>
        </div>
        <section className=' bg-[#151E1E] text-white'>
            <div className='m-container py-24 xl:flex xl:gap-[15%]'>
                <h2 className='text-2xl font-primary mb-8 xl:w-3/5 xl:text-3xl'>Slovenia's Triglav National Park spans 880 square kilometers, encompassing 4% of the country's land area. It showcases rugged mountains, serene lakes, and dense forests, highlighting Slovenia's rich natural diversity. </h2>
                <div>
                    <h3 className='text-xl font-medium  mb-4'>Reasons to visit</h3>
                    <p className='font-thin text-lg'>Diverse Landscapes</p>
                    <p className='font-thin text-lg'>Plethora of hikes</p>
                    <p className='font-thin text-lg'>Natural lakes</p>
                    <p className='font-thin text-lg'>Magical Waterfalls</p>
                    <p className='font-thin text-lg'>Convenient public transport</p>
                    <p className='font-thin text-lg'>Kayaking</p>
                    <p className='font-thin text-lg'>Mountain huts</p>
                </div>
            </div>
        </section>
        <section className='xl:flex'>
            <Link to="/morocco/blog/essential-phrases-and-words-for-your-moroccan-adventure/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/6nqJTrpuTkdQrOVVul6ydM/58b03baa495a30d8b19721fb44ca4480/Slovenia_Hero.jpg')] transform transition ease-in-out duration-1000 hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>Exploring Slovenia: A Perfect One-Week Itinerary to Discover Europe's Hidden Gem</h3>
                    </div>
                </div>
            </Link>
            <Link to="slovenia/blog/exploring-slovenia-perfect-one-week-itinerary-to-discover-europe's-hidden-gem/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/1JVBJ8E9kIJjQZUNiHasRi/9b4eb9441bd153ce86edaafdf85b8d12/Ljubljana_Bus_Stop.jpg')] transform transition ease-in-out duration-1000 hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>How to Get from Ljubljana to Triglav National Park</h3>
                    </div>
                </div>
            </Link>
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