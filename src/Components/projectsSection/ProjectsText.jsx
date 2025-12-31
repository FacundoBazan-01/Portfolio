import React from 'react'

const ProjectsText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
      <h2 className='text-6xl text-cyan mb-10'>Proyectos</h2>
      
      {/* Le agregué max-w-4xl para que el texto no se estire de punta a punta en monitores grandes */}
      <p className='text-lg text-center text-white max-w-4xl px-4 leading-relaxed'>
        Actualmente, estos proyectos se encuentran desplegados en entornos de desarrollo local 
        para garantizar la integridad de los datos y la optimización del backend. 
        Te invito a explorar el código fuente para analizar la lógica de negocio y la arquitectura implementada.
      </p>
    </div>
  )
}

export default ProjectsText