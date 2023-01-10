import React from 'react'
import TreatmentCards from '../components/Treatment/TreatmentCards'
import TreatmentTitle from '../components/Treatment/TreatmentTitle'

export default function Treatment() {
  return (
    <div className='Treatment'>
      <TreatmentTitle/>
      <TreatmentCards/>
    </div>
  )
}
