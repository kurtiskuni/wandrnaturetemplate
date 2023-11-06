import { Link } from 'gatsby'
import React from 'react'
// import * as styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#151E1E] pt-12 text-white">
          <div className="container xl:flex xl:justify-between xl:pb-10">
              <div className='flex flex-col'>
                  <img src="/logo-white.svg" className="w-48 mb-4" alt="" loading="lazy" decoding="async"></img>
                  <p className='mb-4 md:w-1/2 text-sm'><b>Your Trusted Adventure Companion:</b> Wandr Nature Simplifies Epic Hikes, Camping, and Global Explorations.</p>
                  <Link to="#header" className='mb-5 underline xl:text-sm'>BACK TO TOP</Link>
              </div>
              <div className='md:flex md:justify-between md:mb-4 xl:gap-24'>
                  <div className='mb-5'>
                      <h3 className='text-lg font-bold  mb-4'>Navigation</h3>
                      <ul role="list" aria-label="navigation links">
                          <li><a aria-label="Home link" href="/" className='hover:underline'>Home</a></li>
                          <li><a aria-label="Menu link" href="/blog"className='hover:underline'>Australia</a></li>
                          <li><a aria-label="Contact link" href="/contact"className='hover:underline'>Japan</a></li>
                          <li><a aria-label="Location link" href="https://goo.gl/maps/vDNj2TXc37dKtgma7"className='hover:underline'>Morocco</a></li>
                          <li><a aria-label="About link" href="/about"className='hover:underline'>Europe</a></li>
                          <li><a aria-label="Location link" href="https://goo.gl/maps/vDNj2TXc37dKtgma7"className='hover:underline'>Morocco</a></li>
                          <li><a aria-label="About link" href="/about"className='hover:underline'>Contact</a></li>
                      </ul>
                  </div>
                  <div className='mb-5'>
                      <h3 className='text-lg font-bold  mb-4'>Collaborate</h3>
                      <ul aria-label="navigation links">
                          <li><a aria-label="Home link" href="/" className='hover:underline'>Partner with us</a></li>
                          <li><a aria-label="Menu link" href="/menu"className='hover:underline'>Become a contributor</a></li>
                      </ul>
                  </div>
                  <div className='mb-10'>
                      <h3 className='text-lg font-bold mb-4'>Contact</h3>
                      <ul role="list" aria-label="contact links">
                          <li><a aria-label="Link to telephone" href="tel:02 6495 2399" className='hover:underline'>T: 02 6495 2399 </a></li>
                          <li><a  className='flex hover:underline'aria-label="Facebook link" href="https://www.facebook.com/FishpenTakeaway"><p>Facebook</p><img className="ml-2" src="/open-tab.svg"></img></a></li>
                          <li><a className="flex hover:underline"aria-label="Instagram Link" href="https://www.tripadvisor.com.au/Restaurant_Review-g528992-d4845846-Reviews-Fishpen_Takeaway-Merimbula_New_South_Wales.html">Instagram<img className="ml-2" src="/open-tab.svg"></img></a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="container">
              <div className='border-b pb-3 text-[.8rem]'>
                  <p>Website Designed & Developed by <a href="https://www.kurtiskunicreative.com/" className='underline'>Kurtis Kuni Creative</a></p>
              </div>
              <div className='pt-3 pb-6'>
                  <p className='text-[.8rem] mb-4'>We respectfully acknowledge the Traditional Custodians of the land we live and work upon, the people of Yuin Country. We pay our respects to elders past, present, and emerging.
                  </p>
                  <div className='flex w-8 gap-2'>
                      <img src="/aboriginal-flag.png" alt=""></img>
                      <img src="/torres_strait_islanders_flag.jpg" alt=""></img>
                      <img src="/lgbt-flag.png" alt=""></img>
                      <img src="/transgender-flag.png" alt=""></img>
                  </div>
              </div>
          </div>
      </section>
      <div className="bg-[#293C3D]">
          <div className='container py-3 text-center'>
              <p className='text-white text-[.75rem]'>Copyright 2022 | Wandr Nature | All Rights Reserved</p>
          </div>
      </div>    
    </footer>
  )
}