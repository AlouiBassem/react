import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
const Footer = () => {
  return (
    <footer id="footer">
      <ul></ul>
      <a href="/" className="footer__logo"> Portefeuille</a>
      <ul className="premalinks">
        <li><a href="/">Accueil</a></li>
        <li><a href="#about">À propos de moi</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portefeuille</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">

        <a href="https://www.linkedin.com/in/bassem-aloui-841706102/" target="__blank"><ImLinkedin/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Bassem Aloui. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer