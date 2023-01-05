import React from 'react'
import SearchIcon from '../../icons/search.svg'
import { FaBeer } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


export default function Sitehead() {
  return (
    <div className='Sitehead'>
      <div className="container">
        <div className="site-head-info d-flex">
          <img className='search-button' src={SearchIcon} alt="" />
          <div className="socials">
            <FaFacebook className='socials-icon facebook' />
            <FaInstagram className='socials-icon instagram' />
            <FaYoutube className='socials-icon youtube'/>
          </div>
        </div>
      </div>
    </div>
  )
}
