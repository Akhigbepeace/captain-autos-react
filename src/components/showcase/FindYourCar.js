import React from 'react'

const FindYourCar = () => {
  return (
    <div id='find-your-car'>
      <div className='car-image'> 
        <div className='image-overlay'>
          <i className='fas fa-play-circle fa-2x'></i>
        </div>
      </div>
      <div className='testimonial'>
        <h1>FIND YOUR DREAM CAR</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br ></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className='signature'>
          <h2><i>Signature</i></h2>
          <div className='signature-post'>
            <h3>Akhigbe Promise</h3>
            <p><b>MD/CEO</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindYourCar