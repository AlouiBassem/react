import React from 'react'
import './about.css'
import ME from '../../assest/Secondimg.jpg'
import {SiFuturelearn} from 'react-icons/si'
import {RiTeamFill} from 'react-icons/ri'
import {FiTarget} from 'react-icons/fi'

const About = () => {
  return (
    <section id="about">
       
        <h2>
À propos de moi</h2>
        <div className='container about__container'>
          <div className='about__me '>
            <div className='about__me-image'> 
              <img src={ME} alt="About pic" />
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <SiFuturelearn className="about__icon"/>
                <h5>Experience</h5>
              <small>Apprentissage rapide </small>
              </article>


              <article className='about__card'>
              <FiTarget className="about__icon"/>

                <h5>Gérer le Stress </h5>
              <small>Travailler sous pression</small>
              </article>
              
           

              <article className='about__card'>
              <RiTeamFill className="about__icon"/>

                <h5>Team</h5>
              <small> Capacité a travailler en équipe </small>
              </article>
              
            </div>
            <p><span className="firstWord">Hi</span>, Je Suis <span class="MyName">Bassem Aloui</span> je Bosse pour logicom Informatique en tant que Développeur </p>

               <a href="#contact" className='btn btn-primary'>
Contactez moi</a>
          </div>
        </div>
      


    </section>
  )
}

export default About
