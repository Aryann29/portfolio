import React from 'react'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiDatabase } from "react-icons/fi";


const Contact = () => {
  return (
    <div className=' h-screen w-full'>
      <div className=" min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <form className="flex flex-col gap-4">
          <label htmlFor="name" className="text-gray-500 font-semibold">
            Name
          </label>
          <input type="text" id="name" name="name" className="p-2 border rounded-lg" />

          <label htmlFor="email" className="text-gray-500 font-semibold">
            Email
          </label>
          <div className="flex items-center">
            <input type="email" id="email" name="email" className="p-2 border rounded-l-lg" />
            <div className="bg-blue-500 text-white p-2 rounded-r-lg">
              <FiMail size={24} />
            </div>
          </div>

          <label htmlFor="message" className="text-gray-500 font-semibold">
            Message
          </label>
          <textarea id="message" name="message" rows="4" className="p-2 border rounded-lg"></textarea>

          <button type="submit" className="bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200">
            Submit
          </button>
        </form>

        <div className="mt-8 flex justify-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FiGithub size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FiLinkedin size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
          </a>
          <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FiDatabase size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FiTwitter size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact