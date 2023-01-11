import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import Banner from '../images/about-banner.webp'


export default function Contact() {
  return (
    <div className='Contact py-5'>
      <div className="container">
        <div className="row">
          <aside className='col-md-4 col-lg-3 mb-5'>
            <div className="list-group mb-4">
              <Link to='/' className='list-group-item list-group-item-action acctive'>КОНТАКТЫ </Link>
              <Link to='/' className='list-group-item list-group-item-action'>Информационный офис</Link>
            </div>

            <div className="banner">
              <Link to='/contact'>
                <img className='w-100' src={Banner} alt="" />
              </Link>
              <div className="text-center">
                <button className='btn btn-warning mt-3'>Подать заявку</button>
              </div>
            </div>
          </aside>

          <div className="col-md-8 col-lg-9 px-5">
            <Form/>
          </div>
        </div>
      </div>
    </div>
  )
}
