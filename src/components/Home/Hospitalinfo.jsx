import React from 'react'
import Img1 from '../../images/home_hospitals.webp'
import Img2 from '../../images/home-2.webp'
import Img3 from '../../images/hospital-bg.jpg'
import Card3 from '../../images/card3.webp'

export default function Hospitalinfo() {
  return (
    <div className='Hospitalinfo'>  
      <div className="container">
        
        <div className="row mb-5">
          <div className="card card1 col-md-4">
            <div className="card-body">
              <img src={Img1} alt="" />
              <img src={Img2} alt="" />
            </div>
          </div>

          <div className="card card2 col-md-8">
            <div className="card-body">
              <h2 className='cardtittle'>Клиники и медицинские центры Acıbadem (Аджибадем)</h2>
              <p>Стремление Группы медицинских компаний Acıbadem (Аджибадем) предоставить своим пациентам медицинское обслуживание мирового класса привело к открытию множества клиник в Турции и за рубежом. Начиная с 2011 года Acıbadem (Аджибадем) расширила свое присутствие за рубежом и открыла клиники в Турции, Македонии, Болгарии и Нидерландах. </p>
              <p>Все клиники в Группе соответствуют мировым стандартам и выделяются своими центрами передового опыта. Онкологические центры (хирургия, лучевая терапия, химиотерапия), Центры кардиологии (детская и взрослая кардиология и кардиохирургия), Центры экстракорпорального оплодотворения, Центры трансплантации органов (печени, почек, костного мозга), Центры позвоночника, Центр спортивной медицины, аккредитованный FIFA, и Центры роботизированной хирургии. Все они аккредитованы на национальном и международном уровне благодаря высокотехнологичному оборудованию и экспертам с большим опытом в своих областях.</p>
              
              <div className="text-center mt-3 nb-3">
                <button className='btn btn-warning'>Читать далее</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card card2 col-md-8">
            <div className="card-body">
              <h2 className='cardtittle'>Центр международных пациентов</h2>
              <p>Центр международных пациентов Группы медицинских компаний Acıbadem (Аджибадем) предоставляет все необходимые услуги пациентам из разных стран. В клиниках Acıbadem (Аджибадем) опытные сотрудники готовы помочь на каждом этапе медицинского путешествия. </p>
              <p>Центр международных пациентов Acıbadem (Аджибадем) – это отправная точка лечения пациентов со всего мира. Для регистрации необходимо прислать полную историю болезней и соответствующие результаты анализов по электронной почте, факсу или обычной почте для ознакомления врачами. После рассмотрения медицинских документов с пациентом связываются сотрудники Центра международных пациентов Acıbadem (Аджибадем). </p>
              <p>В Центре обслуживания пациентов работает команда опытных сотрудников. Их цель – организовать и упростить медицинское путешествие, начиная со дня прибытия и до отъезда домой. Они учитывают все детали: встречу в аэропорту, предоставление услуг переводчика и доставку копий медицинских заключений, руководствуясь индивидуальным подходом и медицинскими потребностями каждого пациента.</p>

              <div className="text-center">
                <button className='btn btn-warning'>
                Читать далее
                </button>
              </div>
            </div>
          </div>

          <div className="card  col-md-4">
            <div className="card-body card3 mt-5 mb-3">

            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="card card1 col-md-4">
            <div className="card-body">
              <img src={Card3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
