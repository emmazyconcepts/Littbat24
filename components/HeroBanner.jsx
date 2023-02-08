import Link from 'next/link'
import React from 'react'

const HeroBanner = ({HeroBanner}) => {
  return (
    <div className='hero-banner-container'>
    
    <div>
    <p className='beats-solo'>SMALL TEXT</p>
    <h3>MID TEXT</h3>
    <img src="" alt="battery" className="hero-banner-image" />

    <div>
    <Link href={`/product/${HeroBanner.product}`}>
    <button>
   {HeroBanner.buttonText}
    </button>
    </Link>
    <div className='desc'>
    <h5>Descript</h5>
    <p>Descript</p>

    </div>
    </div>

    </div></div>
  )
}

export default HeroBanner