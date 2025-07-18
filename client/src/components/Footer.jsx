import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-6 border-t border-white  mt-20'>
     <img src={assets.logo} alt="logo" width={150} />
     <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden'>copyright@Vicky. All Right Reserved</p>

     <div className='flex gap-2.5'>
        <img src={assets.facebook_icon} alt="fb-icon" width={35} />
        <img src={assets.instagram_icon} alt="ig-icon" width={35} />
        <img src={assets.twitter_icon} alt="x-icon" width={35} />
     </div>
    </div>
  )
}

export default Footer