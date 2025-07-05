import React from 'react'
import bellIcon from "../assets/bell-icon.svg"
import searchIcon from "../assets/search-icon.svg"

const Header = ({toggleSidebar}) => {
  return (
    <div className="flex w-[100%] items-center justify-between px-6 py-4">
    <div className="flex items-center flex-grow">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-100 lg:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="w-[35%]  relative hidden sm:block">
        <span className="absolute inset-y-0 left-1 flex items-center pl-2 pointer-events-none">
          <img src={searchIcon} alt="search" className="h-4 w-4 text-gray-200" />
        </span>
        <input
          type="text"
          placeholder="Search orders..."
          className="pl-10 pr-3 w-[100%] bg-iceberg/10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-aztecPurple text-sm "
        />
      </div>
    </div>
    
    <div className="flex items-center gap-4">
      <div className=' border border-gray-100 p-2 rounded-lg '>
        <img className='h-5 w-5' src={bellIcon} alt="bell" />
      </div>
      <div className="py-3 px-5 bg-iceberg rounded-full flex items-center justify-center">
        V
      </div>
    </div>
  </div>
  )
}

export default Header
