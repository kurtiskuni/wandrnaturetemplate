import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
// import * as styles from '../styles/nav.module.css'
import Menu from '../components/Menu';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);

    document.body.style.backgroundColor = toggle ? '' : '#151E1E';

  }

  useEffect(() => {
    const nav = document.querySelector('header');

    if (nav) {
      let lastScrollY = window.scrollY;

      window.addEventListener('scroll', () => {
        // Check if the user has scrolled more than 300px
        if (lastScrollY < window.scrollY && window.scrollY > 300) {
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
      link: '/australia',
    },
    {
      title: 'Japan',
      link: '/japan',
    },
    {
      title: 'Morocco',
      link: '/morocco',
    },
    {
      title: 'Europe',
      link: '#',
      subMenuItems: [
        { title: 'Italy', link: '/italy' },
        { title: 'Slovenia', link: '/slovenia' },
        { title: 'Croatia', link: '/croatia' },
      ],
      linkType: 'sublink', // Specify link type as 'sublink'
    },
  ];
  

  return (
    <header id="header" className='border-b border-grey fixed z-20 w-full bg-white'>
      <div className="xl:flex xl:items-center xl:justify-between container">
        <div className='flex items-center justify-between py-3 xl:w-auto z-20 xl:mr-0 xl:ml-0 relative'>
          <a href="/" className='w-48'>
            <img src={`${toggle ? '/logo-white.svg' : '/logo-dark.svg' }`} alt="" />
          </a>
          <button onClick={handleToggle}className={`xl:hidden border border-[#151E1E] py-[.3rem] px-[1rem] rounded-full text-sm ${toggle ? 'text-white' : ''}`}>{toggle ? 'Close': 'Menu'}</button>
        </div>
        <div className='md:w-1/2 lg:w-5/12 absolute bg-[#151E1E] xl:bg-inherit w-full top-0 right-0 xl:w-full px-5 xl:px:0 xl:pl-20 xl:pr-0 xl:static xl:top-auto xl:right-auto'>
          <nav className={`text -white w-full pt-20  xl:flex xl:h-min h-screen xl:pt-0 xl:mt-0 xl:justify-between xl:items-center ${toggle ? '' : 'hidden'}`}>
            <Menu items={items} />
            <ul className='flex flex-col xl:flex-row xl:items-center'>
            {/* <Link className="py-5 border-b  xl:border-none border-slate-500 flex justify-between font-semibold xl:mr-8 hover:underline" to="/"><h3>Search</h3><img className='w-3 xl:hidden' src="/arrow-right-solid.svg"></img></Link>  */}
            <Link className="py-5 xl:py-0 border-b  xl:border-none border-[#293C3D] flex justify-between font-semibold xl:mr-8 hover:underline text-white xl:text-[#151E1E]" to="/"><h3>Partner with us</h3><img className='w-3 xl:hidden' src="/arrow-right-solid.svg"></img></Link> 
            <Link className="hover:bg-slate-800 hover:text-white py-5 border-b  sm:border-none border-[#293C3D] flex justify-between font-semibold xl:border-black xl:border xl:border-solid xl:py-2 xl:px-6  xl:my: auto text-white xl:text-[#151E1E]" to="/"><h3>Newsletter</h3><img className='w-3 xl:hidden fill-white' src="/up-right-from-square-solid.svg "></img></Link>
          </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}