import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../images/about-banner.webp'
import Img1 from '../images/news1.jpg'
import Img2 from '../images/news2.webp'
import Img3 from '../images/news3.webp'



export default function News() {
  return (
    <div className='News py-5'>
      <div className="container">
        <div className="row">
          <aside className='col-md-4 col-lg-3'>
            <div className="list-group mb-4">
              <Link to='/' className='list-group-item list-group-item-action'>ПОЧЕМУ ACIBADEM</Link>
              <Link to='/' className='list-group-item list-group-item-action active'>НОВОСТИ </Link>
              <Link to='/' className='list-group-item list-group-item-action'>ИСТОРИИ ПАЦИЕНТОВ </Link>
              <Link to='/' className='list-group-item list-group-item-action'>КЛИНИКИ </Link>
              <Link to='/' className='list-group-item list-group-item-action'>СОВЕТ ДИРЕКТОРОВ </Link>
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

          <div className="col-md-8 col-lg-9">
            <h1>НОВОСТИ </h1>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img1} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img2} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img3} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img1} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img2} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card news-item mb-4">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 align-self-center">
                    <Link to='/news'>
                      <img className='w-100' src={Img3} alt="" />
                    </Link>
                  </div>
                  <div className="col-md-8 py-2">
                    <h5 className="line-limit">
                      <Link to="/news">Советы для здорового сердца</Link>
                    </h5>
                    <br />
                    Следуйте простым, но эффективным рекомендациям для поддержания здоровья сердечно-сосудистой системы. Таким образом, вы можете снизить риск сердечно-сосудистых заболеваний. Секрет здорового сердца… Сердечно-сосудистые заболевания можно предотвратить.  Согласно исследованиям, изменение образа жизни может снизить риск сердечно-сосудистых заболеваний примерно на 82 процента. Для поддержания здоровья сердечно-сосудистой системы следует обратить внимание на следующие советы Попрощайтесь с курением и больше […]
                    <div className="text-right">
                      <Link to='/news' className='btn text-secondary mt-3'>Читать дальше </Link>
                    </div>
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
