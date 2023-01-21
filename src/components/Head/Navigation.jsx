import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import { useState } from 'react';

export default function Navigation() {
  return (
    <Navbar className='nav_bar' collapseOnSelect expand="lg" variant="light">
      <Container className='nav'>
        <Link to='/'>
          <img className='nav-logo' src={Logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <ul className="nav-list">
              <li className="nav-item"><Link className='color_blue nav-links' to="/">ГЛАВНАЯ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/about">ПОЧЕМУ GREENLINES</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/doctors">ВРАЧИ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/treatment">ЛЕЧЕНИЕ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/technologies">ТЕХНОЛОГИИ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/patientguide">РУКОВОДСТВО ДЛЯ ПАЦИЕНТОВ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/news">НОВОСТИ</Link></li>
              <li className="nav-item"><Link className='color_blue nav-links' to="/contact">КОНТАКТЫ</Link></li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
