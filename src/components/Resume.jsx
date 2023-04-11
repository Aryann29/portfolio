import React from 'react'
import res from '../assets/resumess.png'

const Resume = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center p-5 mt-10'>
      <h2 className='text-2xl font-bold mt-10 mb-2'>Resume</h2>
      <div className="h-full w-full flex items-center justify-center">
        <img src='#' alt="" className="w-[1000px] h- max-h-full object-cover" />
      </div>
      <a href='/path/to/resume.pdf' download='resume.pdf' className=' text-blue-500 underline'>Download Resume</a>
    </div>
  )
}

export default Resume
