import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/appleWatch.png'
import { AiFillApple } from 'react-icons/ai'
const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className='left'>
          <p>From ₹45900.00*</p>
          <h3>A healthy leap ahead</h3>
          <p>From 2nd December to 11th Jan</p>
        </div>
        <Image src={img} width='150'></Image>
        <div className='right'>
          <h3><AiFillApple/> </h3> 
          <h3>WATCH</h3>
          <Link href={""}>
              <button type="button">Shop Now</button>
          </Link>
        </div>
        
      </div> 

    </div>
  )
}

export default FooterBanner