import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>

        <div className='the-best-ad'>
          <div></div>
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
                <span>+140</span>
                <span>expert coachs</span>
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

        {/* Hero button */}
        <div className='hero-button'>
          <button className='btn'>Get Start</button>
          <button className='btn'>Learn more</button>
        </div>

      </div>

      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div> 

        {/* hero image */}
        <img src={hero_image} alt="hero" className='hero-image' />
        <img src={hero_image_back} alt="hero" className='hero-image-back' />

        {/* calories */}

        <div className='calories'>
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>516 kcal</span>
          </div>
        </div>

      </div>
    </div>
  )
}
