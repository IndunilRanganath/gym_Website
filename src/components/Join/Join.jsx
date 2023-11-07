import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const  form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9dfwf4e', 'template_6e64381', form.current, 'phAa36xahquWYUcaU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='Join' id='join-us'>
        <dev className="left-j">
            <hr/>
            <div>
                <span className='stroke-test'>ready to</span>
                <span>leavel up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-test'>with us</span>
            </div>
            
        </dev>
        <div className="right-j">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email'/>
                <button className='btn btn-j'>JOIN US</button>
            </form>
        </div>
    </div>
  )
}

export default Join