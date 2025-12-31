import React from 'react'

const ExpTopRight = () => {
  return (
    <div className='xl:w-[25%] lg:w-[30%] w-full border border-lightBrown p-4 rounded-xl hover:shadow-lg transition-all duration-300 bg-black/20'>
    
      
      <h3 className='text-xl font-bold text-white mb-2 text-center'>
        Impacto Real
      </h3>

      <p className='text-lg text-center text-lightGrey leading-relaxed'>
        Más allá del código, me enfoco en solucionar problemas. Desde la 
        <span className='font-bold text-white'> gestión de usuarios y seguridad </span> 
        en sistemas farmacéuticos, hasta la 
        <span className='font-bold text-white'> digitalización de procesos </span> 
        para emprendimientos gastronómicos.
        <br /><br />
        ¿Mi especialidad? Transformar lógicas de negocio complejas en aplicaciones 
        <span className='text-lightBrown font-semibold'> Node.js & React </span> 
        escalables.
      </p>
    </div>
  )
}

export default ExpTopRight