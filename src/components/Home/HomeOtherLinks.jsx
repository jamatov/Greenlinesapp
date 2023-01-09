import React from 'react'
import Img1 from '../../images/other-links-card1.jpeg'
import { FaAngleRight } from 'react-icons/fa'
import Logo from '../../images/logo.svg'

export default function HomeOtherLinks() {
  return (
    <div className='HomeOtherLinks'>
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card eq-card">
              <div className="bg-wrapper bg1">
              </div>
              
              <h3>ИСТОРИИ ПАЦИЕНТОВ</h3>
              <div className="blur"></div>

              <div className="card-body">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="card-body">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="card-body ">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="text-right card-body">
                <button className='btn'> Все истории <FaAngleRight/> </button>
              </div>


            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card eq-card">
              <div className="bg-wrapper bg2">
              </div>
              
              <h3>ИСТОРИИ ПАЦИЕНТОВ</h3>
              <div className="blur"></div>

              <div className="card-body">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="card-body">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="card-body ">
                <div className="pt-item row pt-3 pb-3">
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

              <div className="text-right card-body">
                <button className='btn'> Все истории <FaAngleRight/> </button>
              </div>


            </div>
          </div>

          <div className="col-md-12 logo-info col-lg-4">
            <div className="card text-center">
              <div className="card-body ">
                <img className='mb-4' src={Logo} alt="" />
                <a className='card-title text-uppercase'>Подать заявку на членство прямо сейчас</a>
                <p>Членство в клубе Acıbadem (Аджибадем) Healthpoint предоставляет множество льгот даже за рамками клиник Acıbadem (Аджибадем). Зарубежный пациент с картой Health Point получает скидки на дополнительные услуги: стоматологические процедуры, Acıbadem (Аджибадем)  Café Aplus. Участников программы Health Point встречают в аэропорту и предлагают проживание со скидками, бесплатный доступ к эксклюзивной лаундж-зоне в стамбульском аэропорту. Благодаря международному колл-центру для пациентов Acıbadem (Аджибадем) (+90216 544 46 64) участникам Health Point обеспечивается доступ к множеству преимуществ: круглосуточная консультация по любым медицинским вопросам, услуги переводчиков (на английском, русском и арабском языках) и информация о ближайших дежурных аптеках или о ближайшем отделении клиники Acıbadem (Аджибадем). </p>
                <button className='btn btn-warning'>Читать далее</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
