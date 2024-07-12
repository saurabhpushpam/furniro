import React from 'react'
import ShopTitle from './ShopTitle'
import ShopFilter from './ShopFilter'
import ShopProductList from './ShopProductList'


const Shop = () => {
  return (
    <>
      <ShopTitle></ShopTitle>
      <ShopFilter></ShopFilter>
      <ShopProductList></ShopProductList>
    </>
  )
}

export default Shop