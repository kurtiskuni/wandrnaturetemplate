import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
// import * as styles from '../styles/nav.module.css'
import Menu from '../components/Menu';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

  }

  useEffect(() => {
    const nav = document.querySelector('header');

    if (nav) {
      let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
          nav.classList.add('nav-hidden');
        } else {
          nav.classList.remove('nav-hidden');
        }

        lastScrollY = window.scrollY;
      });
    }
  }, []);

  const items = [
    {
      title: 'Australia',
      link: '',
      subMenuItems: [
        { title: 'All', link: '/' },
        { title: 'Victoria', link: '/' },
        { title: 'New South Wales', link: '/' },
        { title: 'Tasmania', link: '/' },
      ],
      linkType: 'sublink', // Specify link type as 'sublink'
    },
    {
      title: 'Japan',
      link: '/about',
    },
    {
      title: 'Morocco',
      link: '/faq',
    },
    {
      title: 'Europe',
      link: '',
      subMenuItems: [
        { title: 'Italy', link: '/' },
        { title: 'Slovenia', link: '/' },
        { title: 'Croatia', link: '/' },
      ],
      linkType: 'sublink', // Specify link type as 'sublink'
    },
    {
      title: 'Contact',
      link: '/contact',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
  ];
  

  return (
    <header id="header" className='border-b border-grey fixed z-20 w-full bg-white'>
      <div className="xl:flex xl:items-center large-container xl:justify-between">
        <div className='flex items-center justify-between py-4 container xl:w-auto z-20 xl:mr-0 xl:ml-0 relative'>
          <a href="/" className='w-48'>
            <img src="/logo-dark.svg" alt="" />
          </a>
          <p onClick={handleToggle}className='xl:hidden'>{toggle ? 'Close' : 'Menu'}</p>
        </div>
        <div className='md:w-1/2 lg:w-5/12 absolute bg-slate-300 xl:bg-inherit w-full top-0 right-0 xl:w-full px-5 xl:px:0 xl:pl-20 xl:pr-0 xl:static xl:top-auto xl:right-auto'>
          <nav className={`w-full pt-20  xl:flex xl:h-min h-screen xl:pt-0 xl:mt-0 xl:justify-between xl:items-center ${toggle ? '' : 'hidden'}`}>
            <Menu items={items} />
            <ul className='flex flex-col xl:flex-row xl:items-center'>
            {/* <Link className="py-5 border-b  xl:border-none border-slate-500 flex justify-between font-semibold xl:mr-8 hover:underline" to="/"><h3>Search</h3><img className='w-3 xl:hidden' src="/arrow-right-solid.svg"></img></Link>  */}
            <Link className="py-5 border-b  xl:border-none border-slate-500 flex justify-between font-semibold xl:mr-8 hover:underline" to="/"><h3>Partner with us</h3><img className='w-3 xl:hidden' src="/arrow-right-solid.svg"></img></Link> 
            <Link className="hover:bg-slate-800 hover:text-white py-5 border-b  sm:border-none border-slate-500 flex justify-between font-semibold xl:border-black xl:border xl:border-solid xl:py-2 xl:px-6  xl:my: auto" to="/"><h3>Newsletter</h3><img className='w-3 xl:hidden' src="/up-right-from-square-solid.svg "></img></Link>
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}