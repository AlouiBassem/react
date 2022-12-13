import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bassem-aloui-841706102/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/" target="_blank"><BsGithub/></a>
    </div>
    )
}

export default headerSocial