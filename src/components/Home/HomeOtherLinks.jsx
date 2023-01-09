import React from 'react'
import Img1 from '../../images/other-links-card1.jpeg'

export default function HomeOtherLinks() {
  return (
    <div className='HomeOtherLinks'>
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card eq-card">
              <div className="bg-wrapper">
                <div className='overlay-title'></div>
              </div>
              
              <h3>ИСТОРИИ ПАЦИЕНТОВ</h3>

              <div className="card-body">
                <div className="pt-item row pt-3 pb-4">
                  <div className="col-lg-4">
                    <img className='w-100' src={Img1} alt="" />
                  </div>
                  <div className="col-lg-8">
                    <p>Поразительная история разделения близнецов в Acıbadem</p>
                  </div>

                  <div className="col text-right mr-3">
                    <button className='btn btn-sm btn-light'>Читать далее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
