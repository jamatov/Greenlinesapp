import React from 'react'
import Bg from '../images/about-image.jpg'
import Banner from '../images/about-banner.webp'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='About py-5'>
      <div className="container">
        <div className="row">
          <aside className="col-md-4 col-lg-3">
            <div className="list-group mb-5  with-shadow">
              <Link to='/about' className='list-group-item list-group-item-action action1' href="">ПОЧЕМУ GREENLINES</Link>
              <Link to='/news' className='list-group-item list-group-item-action' href="">НОВОСТИ </Link>
              <Link to='/' className='list-group-item list-group-item-action' href="">ИСТОРИИ ПАЦИЕНТОВ </Link>
              <Link to='/' className='list-group-item list-group-item-action' href="">КЛИНИКИ </Link>
              <Link to='/' className='list-group-item list-group-item-action' href="">СОВЕТ ДИРЕКТОРОВ </Link>
              <Link to='/' className='list-group-item list-group-item-action' href="">ИНТЕГРИРОВАННАЯ МОДЕЛЬ ЗДРАВООХРАНЕНИЯ </Link>
            </div>

            <div className="banner">
              <Link to='/contact'>
                <img src={Banner} alt="" />
              </Link>

              <div className="text-center pt-2">
                <button className='btn btn-warning'>Подать заявку</button>
              </div>
            </div>
          </aside>

          <div className="col-md-8 col-lg-9">
            <div className="page-banners mb-4">
              <img className='w-100' src={Bg} alt="" />
            </div>

            <div className="card">
              <div className="cardbody">
                <h2 className='h3'>ПОЧЕМУ GREENLINES</h2>
                <strong >Экосистема, которая является примером для всего мира в сфере предоставления медицинских услуг…</strong>
                <p className='mt-3'>Международная сеть клиник ACIBADEM начала свою историю в сфере медицинского обслуживания как небольшая районная клиника в г. Стамбул, Турция.  Сегодня ACIBADEM – это бренд, который занял достойное место среди мировых лидеров в области здравоохранения, состоящий из 24 клиники, 14 медицинских центров и компаний — служб поддержки. Быстрое развитие ACIBADEM привело к подписанию совместного партнерства с IHH Healthcare в 2012 году, что позволило стать частью второй по величине сети медицинских учреждений в мире.</p>
                <p>Наша миссия по расширению присутствия за рубежом началась в 2011 году с открытия клиники ACIBADEM Sistina в г. Скопье, Македония. Затем в 2016 году следовало приобретение Tokuda Group и City Clinic Group в Болгарии. Наряду с этим приобретением, ACIBADEM Healthcare Group стала крупнейшим поставщиком медицинских услуг в Болгарии. Далее наше мировое присутствие расширилось в 2017 году с запуском Центра обслуживания иностранных пациентов ACIBADEM (площадью 5 000 квадратных метров) в Амстердаме. </p>
                <h3>Конкурентоспособность на мировом рынке интегрированных медицинских услуг</h3>
                <p>Все клиники группы не только соответствуют мировым стандартам­, они также примечательны своими центрами передового опыта. 11 онкологических центров (хирургия, лучевая терапия, химиотерапия), 16 кардиологических центров  (детская и взрослая кардиология и кардиохирургия), 14 центров экстракорпорального оплодотворения (ЭКО), 10 центров трансплантации органов (печень, почки, костный мозг), 10 центров реабилитации позвоночника, 3 центр спортивной медицины, аккредитованный FIFA и 6 центров роботизированной хирургии — все они входят в число национально и международно аккредитованных и квалифицированных центров благодаря их передовому технологическому оборудованию и специалистам, имеющим значительный опыт в своих областях.</p>
                <p>Медицинские учреждения ACIBADEM прилагают все усилия, чтобы постоянно улучшать качество обслуживания пациентов. предлагает широкий спектр услуг, включая лабораторные исследования патологии, пищевого санитарного контроля, стволовых клеток и пуповинной крови. </p>
                <p>Все клиники группы не только соответствуют мировым стандартам­, они также примечательны своими центрами передового опыта. 11 онкологических центров (хирургия, лучевая терапия, химиотерапия), 16 кардиологических центров  (детская и взрослая кардиология и кардиохирургия), 14 центров экстракорпорального оплодотворения (ЭКО), 10 центров трансплантации органов (печень, почки, костный мозг), 10 центров реабилитации позвоночника, 3 центр спортивной медицины, аккредитованный FIFA и 6 центров роботизированной хирургии — все они входят в число национально и международно аккредитованных и квалифицированных центров благодаря их передовому технологическому оборудованию и специалистам, имеющим значительный опыт в своих областях.</p>
                <h3>Центр оздоровительного туризма</h3>
                <p>Каждый год многие пациенты из разных уголков мира приезжают в Турцию для получения лечения, и они предпочитают Международную сеть клиник ACIBADEM, которая предоставляет услуги с использованием самых передовых технологий в мире, а также имеет команды специалистов, которые соответствуют международным стандартам качества.</p>
                <p>Для их удобства, Центр обслуживания иностранных пациентов ACIBADEM был спроектирован как «единый» центр предоставления услуг и обслуживает каждого пациента со дня первого запроса до момента возвращения домой. Как только иностранные пациенты решают приехать в Турцию для лечения, они легко могут получить варианты по организации поездки и планы лечения в информационных офисах ACIBADEM. В настоящее время ACIBADEM открыла 48 информационных офисов, которые расположены в 25 странах и 46 городах за пределами Турции. По прибытию в аэропорт Турции, иностранных пациентов ждет теплая встреча на нашей стойке Health Point. Пациенты, ожидающие трансфер, могут воспользоваться Wi-Fi.  Наши пациенты доставляются прямиком в отель или клинику. На стойках Health Point в клиниках, наших пациентов будут приветствовать переводчики, готовые оказывать языковую поддержку на протяжении всего лечения на 20 различных языках.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
