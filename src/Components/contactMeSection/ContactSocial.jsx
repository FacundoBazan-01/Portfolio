import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
      <SingleContactSocial Link="https://github.com/FacundoBazan-01#" Icon={FiGithub}/>
      <SingleContactSocial Link="https://wa.me/5493816281616" Icon={FaWhatsapp}/>
      <SingleContactSocial Link="https://www.instagram.com/facundo_bazan01/" Icon={FaInstagram}/>
    </div>
  )
}

export default ContactSocial
