import React from 'react'

const Billing = () => {
  return (
    <>
      <div className='billing-main'>
        <div className='billing-container'>
          <div className='billing-inputdata'>
            <div className='billing-title'>Billing details</div>
            <div className='billing-name'>
              <div className='billing-fname'>
                <p className='billing-all-text'>First Name</p>
                <input type='text' className='billing-nameinput'></input>
              </div>
              <div className='billing-lname'>
                <p className='billing-all-text'>Last Name</p>
                <input className='billing-nameinput'></input>
              </div>
            </div>
            <div className='billing-companyname'>
              <p className='billing-all-text'>Company Name (Optional)</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-country'>
              <p className='billing-all-text'>Country / Region</p>
              <input className='billing-all-input' placeholder="Sri Lanka"></input>
            </div>
            <div className='billing-street'>
              <p className='billing-all-text'>Street address</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-town'>
              <p className='billing-all-text'>Town / City</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-provience'>
              <p className='billing-all-text'>Province</p>
              <input className='billing-all-input' placeholder='Western Province'></input>
            </div>
            <div className='billing-zip'>
              <p className='billing-all-text'>ZIP code</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-phone'>
              <p className='billing-all-text'>Phone</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-email'>
              <p className='billing-all-text'>Email address</p>
              <input className='billing-all-input'></input>
            </div>
            <div className='billing-additional'>
              <input type='text' placeholder='Additional information' className='billing-all-input'></input>
            </div>
          </div>
          <div className='billing-detail'>
            <div className='billing-order-detail'>
              <div className='billing-detail-bill'>
                <div className='billing-detail-product'>
                  <p>Product</p>
                  <div className='billing-product-name'>
                    <p>Asgaard sofa </p>
                    <p>X 1</p>
                  </div>
                  <p></p>
                  <p></p>
                </div>
                <div className='billing-detail-subtotal'></div>
              </div>
              <div className='billing-detail-desc'></div>
              <div className='billing-detail-btn'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Billing