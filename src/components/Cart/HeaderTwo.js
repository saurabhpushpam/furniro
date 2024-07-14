import React from 'react';
import './HeaderTwo.css'
import logo from '../../images/House_Logo.png'
export default function HeaderTwo() {
  return (
    <div>
      <div className='shop-title-main'>
        <div className='shop-title-text'>
          <div><img src={logo} alt=''></img></div>
          <p className='shop-title-shop'>Cart</p>
          <div className='shop-title-breadcrumb-route'>
            <p className='shop-title-breadcrumb'>Home &gt; </p>
            <p className='shop-title-breadcrumb-next'>&nbsp; Cart</p>
          </div>
        </div>
      </div>

    </div>
  )
}