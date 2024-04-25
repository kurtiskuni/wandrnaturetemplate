import React from 'react'
import { Link } from 'gatsby';
import Layout from './components/Layout'
import './styles/global.css'

export default function Japan() {
  return (
    <Layout>
        <div className="relative h-[90vh] xl:h-screen">
          <div className="absolute  w-full h-full bg-cover bg-center xl:bg-center bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/1HedbMouvUJwv95RVAK86v/242586210234860842bdf992b5e8dde9/Goryu_Peak.jpg')]">
          {/* <div className="absolute linear-background h-full w-full"></div> */}
            <div className="m-container absolute linear-background h-full w-full">
                <h3 className='font-primary font-medium text-3xl text-center bottom-10 inset-x-0 xl:text-5xl absolute z-10 text-white'>Japan</h3>
            </div>
          </div>
        </div>
        <section className=' bg-[#151E1E] text-white'>
            <div className='m-container py-24 xl:flex xl:gap-[15%]'>
                <h2 className='text-2xl font-primary mb-8 xl:w-3/5 xl:text-3xl'>Japan's diverse landscape, shaped by its volcanic geology, offers breathtaking scenery, from snow-capped peaks to lush forests. Hiking enthusiasts are drawn to its majestic mountains, where they can traverse trails blanketed in serene snowscapes, experiencing the harmony of nature firsthand.</h2>
                <div>
                    <h3 className='text-xl font-medium  mb-4'>Reasons to visit</h3>
                    <p className='font-thin text-lg'>Amazing hiking</p>
                    <p className='font-thin text-lg'>Ancient Cultures</p>
                    <p className='font-thin text-lg'>Volcano landscapes</p>
                    <p className='font-thin text-lg'>Food</p>
                    <p className='font-thin text-lg'>Cheap skiing</p>
                </div>
            </div>
        </section>
        <section className='xl:flex'>
            <Link to="/blog/essential-phrases-and-words-for-your-moroccan-adventure/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/pEfJSzyg1IzylbUn3QKLu/c7aba46f1e129a51eb68a783e0d05a18/Japan_Hero_Shot.jpg')] transform transition ease-in-out duration-1000 xl:hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>A guide to working a ski season in Japan on a working holiday visa</h3>
                    </div>
                </div>
            </Link>
            <Link to="/blog/exploring-slovenia-perfect-one-week-itinerary-to-discover-europe's-hidden-gem/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/Hsr1ZjARDDmiLcCyvezFI/474f53fd59b08ab340c727bf33ebbc67/Baker_North_Face.jpg')] transform transition ease-in-out duration-1000 xl:hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>Steps to take when first getting into backcountry skiing</h3>
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