import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../assets/rightArrow.png'

const Recipes = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category" key={programsData}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Recipes