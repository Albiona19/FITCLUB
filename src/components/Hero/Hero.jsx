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

                  <span>The best Fitness club in the town</span>
                 
              </div>
              {/* Hero Heading */}
              <div className="hero-text">
                <div className='div1'>
                  <span className='stroke-text'>
                    Shape
                  </span>
                  <span>
                     Your
                  </span>
                  </div>
                  <div className='div2'><span>
                    Ideal Body</span></div>
                    <div>
                      <span>
                      In here we will help you to shape and build your ideal body 
                      live up your life to fullset

                      </span>
                    </div>
              </div>
        </div>
        <div className="right-h">right side</div>
    </div>
  )
}

export default Hero