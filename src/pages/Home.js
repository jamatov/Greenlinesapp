import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeInfo from '../components/Home/HomeInfo'
import HomeSearch from '../components/Home/HomeSearch'
import HomeServices from '../components/Home/HomeServices'

export default function Home() {
  return (
    <div className='Home'>
      <HomeHeader/>
      <HomeSearch/>
      <HomeInfo/>
      <HomeServices/>
    </div>
  )
}
