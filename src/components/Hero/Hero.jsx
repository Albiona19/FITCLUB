import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'

import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {type:'spring', duration:3}
  return (
    <div className='hero'>
       <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header/>
          {/* The best ad */}
              <div className="the-best-ad">
                <motion.div initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type:'tween'}}>

                </motion.div>
              
          
             
                  <span>The best fitness club  in town</span>
                 
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
                  ideal body</span></div>
                    <div>
                      <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsum aut nihil animi! Ipsa, nisi! Commodi excepturi ea vel neque.
                      </span>
                    </div>
              </div>
              
              {/* figures */}
              <div className="figures">
                <div>
                  <span>+140</span>
                  <span>Expert Coaches</span>
                </div>
                <div>
                  <span>+978</span>
                  <span>members joined</span>
                </div>
                <div>
                  <span>+50</span>
                  <span>fitness programs</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
              </div>
        </div>
       
        <div className="right-h">
           <button className='btn'>Join Now</button>

           <motion.div 
           initial={{right:'-1rem'}}
           transition={transition}
           whileInView={{right:'4rem'}}
           
           className="heart-rate">
            <img src={Heart} alt="" className='heart' />
            <span>Heart Rate</span>
            <span>116 bpm</span>
           </motion.div>
           {/* hero images */}
           <img src={hero_image} alt="" className='hero-image'/>
           <motion.img 
           initial={{right:'11rem'}}
           whileInView={{right:'20rem'}}
           transition={transition}
           
           src={hero_image_back} alt="" className='hero-image-back' />

           {/* calories */}
           <motion.div 
           initial={{right:'37rem'}}
           whileInView={{right:'28rem'}}
           transition={transition}
           
           
           className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories </span>
              <span>220kcal</span>
            </div>
           </motion.div>
        </div>
    </div>
  )
}

export default Hero