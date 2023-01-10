import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorsTitle() {
  return (
    <div className='DoctorsTitle'>
      <div className="container">
        <div className="col-12">
          <ul>
            <li>
              <Link to='/'>ГЛАВНАЯ</Link>
            </li>

            <li className='list-item2'>
              <Link to='/treatment'>ЛЕЧЕНИЕ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
