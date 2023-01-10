import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from '../../images/treatment1.webp'
import Img2 from '../../images/treatment2.webp'


export default function TreatmentCards() {
  return (
    <div className='TreatmentCards py-5'>
      <div className="container">
        <div className="row">
          
          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img1} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Лечение рака (онкология)</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4 text-center">
            <div className="card">
              <Link to='/treatment'>
                <img src={Img2} alt="" />

                <div className="card-body text-center text-white">
                  <p className='card-text h6'>Рак Простаты</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
