import React from 'react'
import ExpInfo from './ExpInfo'

const ExpTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Desde 2023</p>
      <div className='flex justify-center items-center gap-4'>
        <ExpInfo number="2" text="Años"/>
        <p className='font-bold text-6xl text-lightBrown'>-</p>
        <ExpInfo number="3" text="Proyectos" />
      </div>
      <p className='text-center text-white text-sm leading-relaxed'>
        Desde mis inicios en el bootcamp de Rolling Code (2023) hasta mi etapa final en la UTN, me he enfocado en transformar la teoría en práctica real.
        <br />
        <br />
        Mi trayectoria se define por el aprendizaje activo: no solo estudio código, sino que construyo sistemas completos para resolver problemas, simulando entornos laborales exigentes.
      </p>
    </div>
  )
}

export default ExpTopLeft