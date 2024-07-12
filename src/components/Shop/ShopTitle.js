import React from 'react'
import './shop.css'

const ShopTitle = () => {
  return (
    <div className='shop-title-main'>
      <div className='shop-title-text'>
        <p className='shop-title-shop'>Shop</p>
        <div className='shop-title-breadcrumb-route'>
          <p className='shop-title-breadcrumb'>Home &gt; </p>
          <p className='shop-title-breadcrumb-next'>&nbsp; Shop</p>
        </div>
      </div>
    </div>
  )
}

export default ShopTitle