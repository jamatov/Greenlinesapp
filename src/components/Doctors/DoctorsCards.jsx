import React from 'react'
import Form from 'react-bootstrap/Form';
import Img1 from '../../images/doctor1.png'
import { Link } from 'react-router-dom';


export default function DoctorsCards() {
  return (
    <div className='DoctorsCards py-5'>
      <div className="container">
        <form action="#" className='uhm-filter-form mb-3'>
          <div className="row">
            <div className=" col-md-4 mb-3">
              <div className="form-group">
                <Form.Select aria-label="Default select example">
                  <option value="" selected="selected">Выберите город</option>
                  <option value="adana">Adana</option>
                  <option value="ankara">Ankara</option>
                  <option value="bursa">Bursa</option>
                  <option value="eskisehir">Eskişehir</option>
                  <option value="istanbul" >İstanbul</option>
                  <option value="kayseri">Kayseri</option>
                  <option value="kocaeli">Kocaeli</option>
                  <option value="mugla">Muğla</option>
                </Form.Select>
              </div>n
            </div>

            <div className="col-md-4 mb-3">
              <div className="form-group">
                <Form.Select aria-label="Default select example" disabled>
                  <option>Выберите клинику</option>

                </Form.Select>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="form-group">
                <Form.Select aria-label="Default select example">
                  <option value="">Выберите направление</option><option value="s-313">Algology (Pain Clinic)</option><option value="s-425">Anesthesiology</option><option value="s-342">Audiology</option><option value="s-412">Cardiology</option><option value="s-353">Cardiovascular Surgery</option><option value="s-354">Chest Diseases</option><option value="s-333">Chest Surgery</option><option value="s-314">Child and Adolescent Psychiatry</option><option value="s-364">Clinical Laboratories</option><option value="s-359">Dentistry</option><option value="s-350">Dermatology</option><option value="s-352">Ear, Nose and Throat</option><option value="s-340">Emergency Service</option><option value="s-357">Endocrinology</option><option value="s-312">Family Medicine</option><option value="s-349">Gastroenterology</option><option value="s-419">Gastroenterology and Coloproctology Surgery</option><option value="s-402">General Surgery</option><option value="s-324">Gynecologic Oncology</option><option value="s-334">Hand Surgery</option><option value="s-316">Hematology</option><option value="s-304">Hospital Medicine</option><option value="s-320">Infectious Diseases and Clinical Microbiology</option><option value="s-355">Internal Medicine</option><option value="s-421">Interventional Radiology</option><option value="s-410">Kidney Transplantation</option><option value="s-335">Medical Oncology</option><option value="s-332">Nephrology</option><option value="s-348">Neurology</option><option value="s-351">Neurosurgery</option><option value="s-366">Nuclear Medicine</option><option value="s-358">Nutrition and Dietetics</option><option value="s-404">Obstetrics and Gynecology</option><option value="s-382">Occupational Medicine</option><option value="s-360">Opthalmology</option><option value="s-325">Oral, Dental and Maxillofacial Surgery</option><option value="s-346">Orthopedics and Traumatology</option><option value="s-384">Pathology</option><option value="s-388">Pediatric Allergy</option><option value="s-341">Pediatric Cardiology</option><option value="s-356">Pediatric Diseases</option><option value="s-331">Pediatric Endocrinology</option><option value="s-383">Pediatric Gastroenterology</option><option value="s-393">Pediatric Genetics</option><option value="s-319">Pediatric Hematology</option><option value="s-303">Pediatric Infectious Diseases</option><option value="s-345">Pediatric Nephrology</option><option value="s-336">Pediatric Neurology</option><option value="s-344">Pediatric Neurosurgery</option><option value="s-322">Pediatric Oncology</option><option value="s-306">Pediatric Pulmonology</option><option value="s-302">Pediatric Rheumatology</option><option value="s-403">Pediatric Surgery</option><option value="s-409">Pediatric Urology</option><option value="s-343">Perinatology and High Risk Pregnancies</option><option value="s-363">Physical Therapy and Rehabilitation</option><option value="s-361">Plastic, Reconstructive and Aesthetic Surgery</option><option value="s-362">Psychiatry</option><option value="s-385">Psychology</option><option value="s-321">Radiation Oncology</option><option value="s-367">Radiology</option><option value="s-300">Romatoloji</option><option value="s-386">Sports Medicine</option><option value="s-347">Urology</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </form>

        <div className="row doctors-cards mb-5 w-100">

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>


          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>

          <div className='col-6 col-sm-4 col-md-3 mb-4 '>
            <div className="card">
              <Link to='/doctors'>
                <img className='w-100' src={Img1} alt="" />
                <div className="card-body text-center text-white">
                  <p>ALİ DENİZ</p>

                </div>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
