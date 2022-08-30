import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-h">
          <Header/>
          {/* The best ad */}
              <div className="the-best-ad">
              <div></div>

                  <span>The best cupcake in town</span>
                 
              </div>
              {/* Hero Heading */}
              <div className="hero-text">
                <div className='div1'>
                  <span className='stroke-text'>
                  What
                  </span>
                  <span>
                  Makes Life
                  </span>
                  </div>
                  <div className='div2'><span>
                  so sweet.</span></div>
                    <div>
                      <span>
                      A form of sweet food made from flour, sugar, and other ingredients, that is usually baked.

                      </span>
                    </div>
              </div>
        </div>
        <div className="right-h">right side</div>
    </div>
  )
}

export default Hero