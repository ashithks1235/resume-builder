import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div style={{height:'400px', backgroundColor:"purple"}} className='d-flex justitfy-content-center align-items-center p-5 text-light flex-column'>
      <h1>Contact Us</h1>
      <p><IoMdMail className='me-1'/>resumebuilder@gmail.com</p>
      <p><FaPhoneAlt className='me-1'/>9848252626</p>
      <p>Connect With Us</p>
      <div className='d-flex justify-content-center my-3 fs-4'>
        <IoLogoWhatsapp />
        <FaFacebookF />
        <AiFillInstagram />
      </div>
      <p>Designed & Built with using React</p>
    </div>
  )
}

export default Footer