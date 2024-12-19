import React from 'react'
import "./project.css"

export const Projects = () => {
  return (
    <section className='mt-10'>
        <div className='flex gap-4 '>
        <h2 className='text-[var(--text-color-secondary)]'>Projects</h2>
         <div className='bg-green px-4 py-1 rounded-full '><p className='text-sm '>new</p></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            <div className='bg-[var(--bg-card)] rounded-lg '>
            <h3 className='text-[var(--text-color-secondary)]'>Project 1</h3>
            <p className='text-[var(--text-color-primary)] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam.</p>
            </div>
            
            
        </div>
    </section>
  )
}
