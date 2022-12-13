import React from 'react'
import './contact.css'
import {HiOutlineMail} from'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u4yc91y', 'template_kqj0pbg', form.current, 'VCveyTXpOkftgxkGW')
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset();
    };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact moi </h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bassem0aloui@gmail.com</h5>
            <a href="mailto:bassem0aloui@gmail.com">Envoyer un  Email</a>
          </article>

          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Bassem Aloui</h5>
            <a href="https://m.me/profile.php?id=100006147826386">Envoyer un  message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>20647559</h5>
            <a href="https://api.whatsapp.com/send?phone=21620647559">Envoyer un  message</a>
          </article>
        </div>
       {/* <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Nom et prénom' required/>
          <input type="email" name="email" placeholder=' Email ' required/>
          <textarea name="message"  placeholder='Message' rows="7"></textarea>
          <button type="submit" className='btn btn-primary perbtn'>Envoyer un  MAIL</button>

        </form>
  */}
      </div>
    </section>
  )
}

export default Contact