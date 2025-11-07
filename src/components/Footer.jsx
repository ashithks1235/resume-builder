import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div style={{height:'400px', backgroundColor:"whitesmoke"}} className='d-flex justitfy-content-center align-items-center p-5 text-light flex-column'>
      <h1 className='text-dark'>Contact Us</h1>
      <p className='text-dark'><IoMdMail className='me-1'/>resumebuilder@gmail.com</p>
      <p className='text-dark'><FaPhoneAlt className='me-1'/>9848252626</p>
      <p className='text-dark'>Connect With Us</p>
      <div className='d-flex justify-content-center my-3 fs-4 text-dark'>
        <IoLogoWhatsapp />
        <FaFacebookF />
        <AiFillInstagram />
      </div>
      <p className='text-dark'>Designed & Built with using React</p>
    </div>
  )
}

export default Footer