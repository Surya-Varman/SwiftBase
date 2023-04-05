import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from '../public/bannerHeadPhones.webp'
const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div className='beats-solo'>
        <p>Beats Solo Air</p>
        <h3>Summer Sale</h3>
        <h1>Live Now</h1>
        <Image src = {img} alt ="headphones" className='hero-banner-image'/>
        <Link href="product/ID">
          <button type="button">Show Now</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroBanner