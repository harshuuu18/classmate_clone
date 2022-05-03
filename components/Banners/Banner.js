import React from 'react'


function Banner({ image }) {
  return (
    <div className='banner'>
      {image ? <img src={image} width="100%" /> : ''}
    </div>
  )
}

export default Banner