import React from 'react'
import cv from '../../assest/Bassem ALOUI - DEV.pdf'
const CTA = () => {
  return (
<div className='cta'>
    <a href={cv} download className='btn'>Télécharger CV</a>
    <a href="#contact" className='btn btn-primary'>
Contactez moi</a>
</div>  )
}

export default CTA