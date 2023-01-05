import React from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeInfo from '../components/Home/HomeInfo'
import HomeSearch from '../components/Home/HomeSearch'

export default function Home() {
  return (
    <div className='Home'>
      <HomeHeader/>
      <HomeSearch/>
      <HomeInfo/>
    </div>
  )
}
