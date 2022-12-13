import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assest/me1.jpg'
import HeaderSocial from './headerSocial'
const Header = () => {
  return (
<header id="home">

    <div className="container header__container">
<h5>Bonjour Je suis </h5>
<h1>Bassem Aloui</h1>
<h5 className='text-light'>Full stack Developper / Dotnet Developper</h5>
   <CTA/>
   <HeaderSocial/>

   <div className="me">
    <img src={me} alt='me'></img>
   </div>
   <a href='#footer' className="scroll__down">
défiler vers le bas</a>
    </div>
</header>  )
}

export default Header