import React from 'react'
import Navbar from './components/Navbar'

const Header = () => {
  return (
    <div className="bg-slate-800 text-white py-8 px-4">
      <div className="container w-full md:max-w-[1280px] mx-auto ">
        <Navbar />
      </div>
    </div>
  )
}

export default Header