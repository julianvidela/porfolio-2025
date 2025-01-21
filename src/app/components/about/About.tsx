/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <>
    
    <div className='flex flex-col items-start'>
    <div className='font-normal text-sm mt-5'>
        <h2 className='text-[var(--text-color-secondary)]'>About</h2>
       
        <p className='text-[var(--text-color-primary)] mt-4'>Hi, I'm Julian</p>
      
        <p className='text-[var(--text-color-primary)] mt-3 '>
            I'm a frontend developer with experience in React, Next.js, and Tailwind CSS. I'm passionate about creating responsive and accessible web applications. I'm currently looking for new opportunities, so feel free to reach out to me!
        </p>
        <p className='mt-3 text-[var(--text-color-primary)]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa quibusdam saepe possimus eaque cum autem deleniti laudantium facilis minus!
        </p>
    </div>
  
    </div>
  </>
  )
}
