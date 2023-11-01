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
        <section className='relative bg-[#151E1E] text-white py-16'>
        <img className="absolute w-[1.5rem] right-2 top-2 xl:right-6 xl:top-6 xl:w-[2rem]" src="/side-logo.svg" alt="" />
          <div className="container xl:flex xl:items-end  xl:my-14">
            <div className='flex flex-col justify-between  mb-12 xl:w-full xl:mb-0'>
              <p className='mb-10 font-thin w-[70%] xl:w-full'>The only no-nonsense archive you need for your next adventure.</p>
              <div>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-5xl'>Australia</h3><span className='ml-2'>01</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-5xl'>Japan</h3><span className='ml-2'>02</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-5xl'>Morocco</h3><span className='ml-2'>03</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-5xl'>Europe</h3><span className='ml-2'>04</span></div></Link>
                <Link to='#'><div className="flex font-primary items-baseline xl:mb-4"><h3 className='text-2xl font-medium xl:text-5xl'>Itineraries</h3><span className='ml-2'>05</span></div></Link>
              </div>
            </div>
            <div>
              <p className='mb-2 italic font-primary'>Why you should spend more time in nature</p>
              <p className='font-thin'>Research has shown that exposure to green spaces and natural environments can reduce stress, lower blood pressure, improve mood, increase physical activity levels, and enhance cognitive functioning.</p>
            </div>

          </div>
        </section>
        <ImageCarousel />



      </Layout>
    );

}