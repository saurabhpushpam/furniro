import React from 'react';
import './CommonHeader.css'
import logo from '../../images/House_Logo.png'
export default function CommonHeader() {
  return (
    <div>
      <div className='shop-title-main'>
        <div className='shop-title-text'>
          <div><img src={logo} alt=''></img></div>
          <p className='shop-title-shop'>Contact</p>
          <div className='shop-title-breadcrumb-route'>
            <p className='shop-title-breadcrumb'>Home &gt; </p>
            <p className='shop-title-breadcrumb-next'>&nbsp; Contact</p>
          </div>
        </div>
      </div>

    </div>
  )
}