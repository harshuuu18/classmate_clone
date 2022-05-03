import React from 'react'


import Copy from '../../Assets/copy.png'

function Hero() {
  return (
    <div className="hero-section">
      <div className="heading-section">
        <h1 className="heading">CUSTOMIZE YOUR</h1>
        <h1 className="heading" id="yellow">NOTEBOOK</h1>
        <button>BUY</button>
      </div>

      <div className="image">
        <img src={Copy} alt="" width="900px" />
      </div>
    </div>
  )
}

export default Hero