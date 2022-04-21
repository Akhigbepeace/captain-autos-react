import React from 'react'

const Showcase = () => {
  return (
    <div id='showcase'>
      <div className='showcase-img'>
        <img src="https://www.123rf.com/photo_5322597_white-hybrid-vehicle-isolated-on-white-background.html" alt="Cars"/>
      </div>

      <div className='showcase-content'>
        <div className='background-content'>
          <div className='header-content'>
            <p>FIND THE RIGHT</p>
            <p>CAR FOR YOU</p>
          </div>
          <button>SEARCH NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Showcase