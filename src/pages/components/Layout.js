import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout overflow-hidden">
        <Navbar />
        <div className='bg-slate-100'>
          { children }
        </div>
        <Footer />
    </div>
  )
}