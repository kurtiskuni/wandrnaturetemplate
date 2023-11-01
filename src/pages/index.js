import React from 'react';
// import { graphql, Link } from 'gatsby';
import Layout from "./components/Layout"
import './styles/global.css'
import ImageCarousel from './components/ImageCarousel';

export default function index() {

return (
      <Layout>
        <ImageCarousel />
        <section className='bg-[#151E1E] text-white py-16'>
          <div className="container">
            <div className='flex flex-col justify-between  mb-12'>
              <p className='mb-10'>The only no-nonsense archive you need for your next adventure.</p>
              <div>
                <div className="flex font-primary items-baseline"><h3 className='text-2xl font-medium'>Australia</h3><span className='ml-2'>01</span></div>
                <div className="flex font-primary items-baseline"><h3 className='text-2xl font-medium'>Japan</h3><span className='ml-2'>02</span></div>
                <div className="flex font-primary items-baseline"><h3 className='text-2xl font-medium'>Morocco</h3><span className='ml-2'>03</span></div>
                <div className="flex font-primary items-baseline"><h3 className='text-2xl font-medium'>Europe</h3><span className='ml-2'>04</span></div>
                <div className="flex font-primary items-baseline"><h3 className='text-2xl font-medium'>Itineraries</h3><span className='ml-2'>05</span></div>
              </div>
            </div>
            <div>
              <p>Why you should spend more time in nature</p>
              <p>Research has shown that exposure to green spaces and natural environments can reduce stress, lower blood pressure, improve mood, increase physical activity levels, and enhance cognitive functioning.</p>
            </div>

          </div>
        </section>



      </Layout>
    );

}