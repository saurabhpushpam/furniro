import React from 'react'
import Topbanner from './Topbanner'
import Secondbanner from './Secondbanner'
import OurProducts from './OurProducts'
import ExploreMore from './ExploreMore'
import ShareYourSetup from './ShareYourSetup'

const Home = () => {
  return (
    <>
      <Topbanner></Topbanner>
      <Secondbanner></Secondbanner>
      <OurProducts></OurProducts>
      <ExploreMore></ExploreMore>
      <ShareYourSetup></ShareYourSetup>
    </>
  )
}

export default Home