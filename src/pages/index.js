import React from 'react';
// import { graphql, Link } from 'gatsby';
import Layout from "./components/Layout"
import './styles/global.css'
import ImageCarousel from './components/ImageCarousel';
import { Link } from 'gatsby';

export default function index() {

return (
      <Layout>
        <ImageCarousel />
        <section className='relative bg-[#151E1E] text-white py-24'>
        <img className="absolute w-[1.5rem] right-2 top-2 xl:right-6 xl:top-6 xl:w-[2rem]" src="/side-logo.svg" alt="" />
          <div className="m-container xl:flex xl:items-end  ">
            <div className='flex flex-col justify-between  mb-12 xl:w-full xl:mb-0'>
              <p className='mb-10 font-thin w-[80%] xl:w-full xl:text-xl'>The only no-nonsense archive you need for your next adventure.</p>
              <div>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-4xl'>Australia</h3><span className='ml-2'>01</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-4xl'>Japan</h3><span className='ml-2'>02</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-4xl'>Morocco</h3><span className='ml-2'>03</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-4xl'>Europe</h3><span className='ml-2'>04</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-4xl'>Itineraries</h3><span className='ml-2'>05</span></div></Link>
              </div>
            </div>
            <div>
              <p className='mb-2 italic font-primary'>Why you should spend more time in nature</p>
              <p className='font-thin xl:text-lg'>Research has shown that exposure to green spaces and natural environments can reduce stress, lower blood pressure, improve mood, increase physical activity levels, and enhance cognitive functioning.</p>
            </div>
          </div>
        </section>
        <ImageCarousel />
        <section className='bg-[#151E1E] text-white relative'>
        <img className="absolute w-[1.5rem] right-2 bottom-2 xl:right-6 xl:top-6 xl:w-[2rem]" src="/side-logo.svg" alt="" />
          <div className="m-container py-40 pt-16 xl:py-24">
            <div className='md:w-[60%] xl:w-[50%]'>
              <h2 className='font-primary text-2xl xl:text-4xl mb-6'>Want exclusive information about our upcoming itineraries and unique trip ideas?</h2>
              <p className='mb-6 text-lg'>Join our value packed newsletter</p>
              <input type="text" name="" id="" placeholder='Enter your name' className='block w-full mb-2 text-sm rounded-md bg-transparent border border-[#679698] py-1 px-2 placeholder-primary::placeholder' />
              <input type="text" name="" id="" placeholder='Enter your email' className='block w-full text-sm mb-4 rounded-md bg-transparent border border-[#679698] py-1 px-2' />
              <button type="submit" className='mb-2 w-[118px] h-[30px] bg-[#679698] rounded-lg text-sm'>Give it to me</button>
            </div>

            </div>
        </section>
        <section>
          <div className="m-container  py-24">
            <div className='md:w-[60%]'>
              <h2 className='font-primary text-2xl font-medium mb-8 xl:text-4xl'>Just Like That Dependable Friend, Wandr Nature Paves the Way to Epic Hikes, Camping, and Globe-Trotting Glory.</h2>
              <p className='mb-2 font-thin'>We're your no-nonsense adventure curator, streamlining every detail to save you time and maximize your time out in the world.</p>
              <p className='font-thin'>Whether you're into epic journeys through Morocco, Japan's mountains, serene lakes in Slovenia, road-tripping Australia's national parks or hiking the Dolomites in Italy, we've got you covered.</p>
            </div>
          </div>
        </section>
    
      </Layout>
    );

}