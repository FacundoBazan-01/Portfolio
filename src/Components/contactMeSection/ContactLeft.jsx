import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Ponte en Contacto</h2>
        <p className='text-white leading-relaxed'>
          ¿Tenés un proyecto en mente o buscás potenciar tu equipo de desarrollo? 
          <br /><br />
          Estoy disponible para transformar ideas complejas en código limpio y eficiente. 
          Ya sea para una colaboración freelance o una posición full-time, 
          <span className='font-bold'> ¡escribime y charlemos!</span>
        </p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactLeft