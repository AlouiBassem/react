import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/react2.jpg'
import IMG2 from '../../assest/portfolio1.jpg'
import IMG3 from '../../assest/taxi.jpg'
import IMG4 from '../../assest/portcap.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'REACT',
    sousTitre:'',
 //   github:'https://github.com//Gestion-de-restaurant'
  },
  {
    id:4,
    image:IMG4,
    title:'Gestion De Caisse VB',
    

  },

  
]
const Portfolio = () => {
  return (
    
    <section id="portfolio">
      <h5>
       Travail récent</h5>
      <h2>Portefeuille</h2>
      <div className="container port__container">
{
        data.map(({id,image,title,github,sousTitre}) =>{
          return(<article key={id} className="port__item">
          <div className="port__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5>{sousTitre}</h5>
          <div className="port__item-cta">
          <a href={github} target="__blank" className="btn">GitHub</a>
          </div>
        </article>)})
}
      </div>
    </section>
  )
}

export default Portfolio