import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaPlane } from 'react-icons/fa'

export default function HomeInfo() {
  return (
    <div className='HomeInfo pt-5'>
      <div className="container">
        <div className="row">

          <div className="card col-md-7">
            <div className='card-body home_box'>
              <h2>ПОЧЕМУ GREENLINES</h2>
              <p>Acıbadem (Аджибадем) International – это универсальный международный центр, предоставляющий услуги по организации медицинского и оздоровительного туризма пациентам со всего мира. Acıbadem (Аджибадем) постоянно развивает и совершенствует медицинский туризм для улучшения комфорта и безопасности тысяч пациентов со всего мира, которые ежегодно посещают Турцию.</p>
              <p>Команда Acıbadem (Аджибадем) сопровождает пациентов с момента прибытия в аэропорт Стамбула до возвращения в свою страну. Зал ожидания Acıbadem (Аджибадем) Health Point в аэропорту – важнейшая служба поддрежки иностанных пациентов. Там, в комфортных условиях, предоставляют бесплатный интернет. После сопровождают в клинику или отель. Пациентам Acıbadem (Аджибадем) предлагают услуги переводчика и скидки на различные дополнительные услуги и процедуры, оказывают поддержку на протяжении всего медицинского путешествия в Турции. </p>
              <div className='more-btn'>
                <button className='btn text-center btn-warning'>Читать далее</button>
              </div>
            </div>
          </div>

          <div className="card col-md-5 pt-3">
            <div className="cards home_box2">
              <p><FaThumbsUp/> Экосистема здравоохранения для безопасности и комфорта пациентов</p>
            </div>

            <div className="cards home_box2">
              <p><FaStar/>  Предоставление высококлассных услуг в центрах передового опыта</p>
            </div>

            <div className="cards home_box2">
              <p><FaPlane/>  Центр организации оздоровительного туризма</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
