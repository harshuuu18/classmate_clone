import React from 'react'


import Group1 from '../../Assets/Group 123.png'
import Group2 from '../../Assets/Group 124.png'

function DesignSection() {
  return (
    <div className="main">
      <h2>DESIGN YOUR NOTEBOOK IN A FEW CLICKS</h2>
      <h3>Select Number of Pages</h3>
      <div className="demonstration">
        <div className="card">
          <img src={Group1} alt="" />
        </div>
        <div className="card">
          <img src={Group2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DesignSection