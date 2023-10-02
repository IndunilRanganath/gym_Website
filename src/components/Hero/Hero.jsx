import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

export const Hero = () => {
  return (
    <div className="hero">
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
          <div></div>
        </div>

      </div>

      <div className="right-h">Right</div>
    </div>
  )
}
