import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
  return (
    <section id="experience">
      <h5>Quelles compétences j'ai</h5>
      <h2>Mon Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement  Desktop</h3>
          <div className="experience__content">
           

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4> C#</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4> Windev</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4> Visual Basic</h4>
             
            </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4> Microsoft Dynamics Nav</h4>
             
            </div>
            </article>
            
          </div>
        </div>

        <div className="experience__backend">
        <h3>Développement  WEB</h3>
          <div className="experience__content">
          <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>HTML</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>CSS </h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Java</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>React JS</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Nodejs</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>MongoDB</h4>
             
            </div>
            </article>
            <article className="experience__details">
              <AiFillCheckCircle className="experience__details-icon"/>
              <div><h4>Express</h4>
             
            </div>
            </article>
          </div>
        </div>

        <div className="experience__DB">
          <h3>Bases de Données</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>MySQL</h4>
              </div>
              </article>
          
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>SQL SERVER</h4>
              </div>
              </article>


              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>MONGODB </h4>
              </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>HFSQL </h4>
              </div>
              </article>

            </div>
        </div>
        <div className="experience__Framework">
          <h3>Autre</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>POWER BI</h4> 
              </div>
              </article>
          
              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>Méthode de travail kanban</h4>
              </div>
              </article>

              <article className="experience__details">
                <AiFillCheckCircle className="experience__details-icon"/>
                <div><h4>Wordpress</h4>
              </div>
              </article>
            </div>
        </div>
      </div>
    
    
    </section>
  )
}

export default Experience