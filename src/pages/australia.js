import React from 'react'
import { Link } from 'gatsby';
import Layout from './components/Layout'
import './styles/global.css'

export const Head = () => (
    <>
    <meta charSet="utf-8" />
    <title>Ultimate archive for epic hikes & adventures in Australia</title>
    <meta 
        name="description"
        content="Exceptional guide & archive to some of the best hikes & adventures in Australia"
    />
    </>
)

export default function Australia() {
  return (
    <Layout>
        <div className="relative h-[90vh] xl:h-screen">
          <div className="absolute w-full h-full bg-cover bg-center xl:bg-center bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/2WqiYm6rjbQq247QwAXf9I/d61471094d66f3370a02e66130029f66/Johanna_Beach.jpg')]">
          {/* <div className="absolute linear-background h-full w-full"></div> */}
            <div className="m-container">
                <h3 className='font-primary font-medium text-3xl text-center bottom-10 inset-x-0 xl:text-5xl absolute z-10 text-white'>Australia</h3>
            </div>
          </div>
        </div>
        <section className=' bg-[#151E1E] text-white'>
            <div className='m-container py-24 xl:flex xl:gap-[15%]'>
                <h2 className='text-2xl font-primary mb-8 xl:w-3/5 xl:text-3xl'>Australia has over 500 national parks, covering more than 28 million hectares of land. Surrounded by unique ecosystems, ranging from rainforests to deserts, support a wide variety of plants, animals, and microorganisms found nowhere else on Earth. </h2>
                <div>
                    <h3 className='text-xl font-medium  mb-4'>Regions</h3>
                    <p className='font-thin text-lg'>Victoria</p>
                    <p className='font-thin text-lg'>New South Wales</p>
                    <p className='font-thin text-lg'>Queensland</p>
                    <p className='font-thin text-lg'>South Australia</p>
                    <p className='font-thin text-lg'>Tasmania</p>
                    <p className='font-thin text-lg'>Western Australia</p>
                    <p className='font-thin text-lg'>Northern Territory</p>
                </div>
            </div>
        </section>
        <section className='xl:flex'>
            <Link to="/blog/essential-phrases-and-words-for-your-moroccan-adventure/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/4A6RBEHrnITILvIoaftfpB/321d328d402866a4af71885b6bc7579f/Wilsons_Prom.jpg')] transform transition ease-in-out duration-1000 xl:hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>Best national parks near Melbourne to put on your adventure list</h3>
                    </div>
                </div>
            </Link>
            <Link to="/blog/exploring-slovenia-perfect-one-week-itinerary-to-discover-europe's-hidden-gem/" className="block relative h-[60vh] xl:w-1/2 xl:h-[450px]">
                <div className="absolute w-full h-full bg-cover bg-center xl:bg-bottom bg-no-repeat overflow-hidden bg-[url('https://images.ctfassets.net/dudk54wuea4x/2WqiYm6rjbQq247QwAXf9I/d61471094d66f3370a02e66130029f66/Johanna_Beach.jpg')] transform transition ease-in-out duration-1000 xl:hover:scale-105">
                    <div className="absolute linear-background h-full w-full"></div>
                    <div className="m-container">
                        <h3 className='font-primary w-[90%] font-medium text-2xl xl:text-3xl xl:w-[80%] absolute  bottom-14 xl:bottom-8 z-10 text-white'>The Three Bays Walk Wilsons Promontory National Park</h3>
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