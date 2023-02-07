import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'
const Herobanner = ({Herobanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{Herobanner.smallText}</p>
            <h3>{Herobanner.midText}</h3>
            <h1>{Herobanner.largeText1}</h1>

            <img src={urlFor(Herobanner.image)} alt="headphones" className="hero-banner-image" />
            <div>
                <Link href={'/product/ID'}>
                <button type='button'>{ Herobanner.buttonText}</button>
                </Link>
                <div className="desc">
            <h5>Description</h5>
            <p>{Herobanner.desc}</p>
          </div>
            </div>
        </div>
       
    </div>
  )
}

export default Herobanner
