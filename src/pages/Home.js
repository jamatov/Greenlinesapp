import React from 'react'
import HomeFacts from '../components/Home/HomeFacts'
import HomeHeader from '../components/Home/HomeHeader'
import HomeInfo from '../components/Home/HomeInfo'
import HomeOtherLinks from '../components/Home/HomeOtherLinks'
import HomeSearch from '../components/Home/HomeSearch'
import HomeServices from '../components/Home/HomeServices'
import Hospitalinfo from '../components/Home/Hospitalinfo'

export default function Home() {
  return (
    <div className='Home'>
      <HomeHeader/>
      <HomeSearch/>
      <HomeInfo/>
      <HomeServices/>
      <HomeFacts/>
      <Hospitalinfo/>
      <HomeOtherLinks/>
    </div>
  )
}
