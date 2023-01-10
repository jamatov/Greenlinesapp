import React from 'react'
import DoctorsCards from '../components/Doctors/DoctorsCards'
import DoctorsTitle from '../components/Doctors/DoctorsTitle'

export default function Doctors() {
  return (
    <div className='Doctors'>
      <DoctorsTitle/>
      <DoctorsCards/>
    </div>
  )
}
