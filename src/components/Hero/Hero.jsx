import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const transition = {type: 'spring', duration: 3};
const moblie = window.innerWidth <= 768 ? true : false;

export const Hero = () => {
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

        <div className='the-best-ad'>
          <motion.div
          initial = {{left: moblie? "135px": "180px"}}
          whileInView = {{left: '8px'}}
          transition = {{...transition, type:'tween'}}>
          </motion.div>
          <span>The best gym in Southern</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='stroke-test'>shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal  body</span>
          </div>
          <div>
            <span>In the we will help you to shape and build your udeal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
            <div>
                <span>
                  <NumberCounter end={140}  start={100} delay={4} preFix="+" />
                </span>
                <span>expert coachs</span>
            </div>
            <div>
                <span>
                <NumberCounter end={950}  start={600} delay={4} preFix="+" />
                </span>
                <span>members joined</span>
            </div>
            <div>
                <span>
                <NumberCounter end={50}  start={20} delay={4} preFix="+" />
                </span>
                <span>fitness programs</span>
            </div>
        </div>

        {/* Hero button */}
        <div className='hero-button'>
          <button className='btn'>Get Start</button>
          <button className='btn'>Learn more</button>
        </div>

      </div>

      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div 
        initial = {{left: '8rem'}}
        whileInView = {{left: '4rem'}}
        transition={transition}
        className='heart-rate'>
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div> 

        {/* hero image */}
        <img src={hero_image} alt="hero" className='hero-image' />
        <motion.img 
        initial = {{right: '15rem'}}
        whileInView = {{right: '25rem'}}
        transition={transition} 
        src={hero_image_back} alt="hero" className='hero-image-back' />

        {/* calories */}

        <motion.div 
        initial = {{right: '45rem'}}
        whileInView = {{right: '40rem'}}
        transition={transition}
        className='calories'>
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>516 kcal</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
