import React from 'react'

const Secondbanner = () => {
  return (
    <>
      <div className='second-heading-main'>
        <div className='second-heading-top'>
          <div className='second-heading'>
            <p className='second-headline'>Browse The Range</p>
            <p className='second-head-data'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='second-head-multicard'>

            <div className='second-head-card'>
              <div className='second-bottom-img' id='head-card-1'></div>
              <p className='second-bottom-data'>Dining</p>
            </div>

            <div className='second-head-card'>
              <div className='second-bottom-img' id='head-card-2'></div>
              <p className='second-bottom-data'>Living</p>
            </div>

            <div className='second-head-card'>
              <div className='second-bottom-img' id='head-card-3'></div>
              <p className='second-bottom-data'>Bedroom</p>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Secondbanner