// import React from 'react';
// import profilePhoto from '../assets/profilephoto.png';
// import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiDatabase } from "react-icons/fi";

// const Home = () => {
//   return (

//     <div className="flex sm:flex flex-row justify-center items-center h-screen bg-[] ">
//       <div className=" flex flex-col justify-center items-center sm:full w-1/2 ">
//         <img src={profilePhoto} alt="Profile" className="rounded-full w-64 h-64 mb-4" />
//         <h1 className="text-4xl font-bold text-[#6D5D6E]">Aryan Pal</h1>
//         <p className="text-lg mt-2">Machine Learning Engineer</p>
//       </div>
//       <div className="sm:w-full w-1/2 p-8">
//         <h2 className="text-2xl font-bold mb-4">About Me</h2>
//         <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra erat eget velit vulputate dignissim. Nulla facilisi. Fusce euismod metus vel sapien consequat, vel dictum dolor consectetur. Morbi id leo non massa bibendum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel libero ac tortor vehicula faucibus ut et odio. Maecenas sit amet felis bibendum, elementum sapien nec, ullamcorper lorem. Donec sodales ultricies turpis, ac posuere sapien. Duis accumsan ligula sit amet magna molestie, vel efficitur nibh dapibus.</p>
//         <div className="mt-8 flex justify-center">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
//             <FiGithub size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
//           </a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
//             <FiLinkedin size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
//           </a>
//           <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
//             <FiDatabase size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
//           </a>
//           <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//             <FiTwitter size={32} className="text-gray-500 hover:text-gray-700 transition-all duration-200" />
//           </a>
//         </div>
//       </div>

//     </div>

//   );
// }

// export default Home;
import React from "react";
import profilePhoto from "../assets/profilephoto.png";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDatabase,
} from "react-icons/fi";

const Home = () => {
  return (
    <div className="flex flex-col max-h-screen sm:max-h-screen sm:flex-row sm:pt-[3rem] pt-16 items-center  bg-[#E7EFFF] p-20">
      <div className="flex flex-col justify-center items-center w-full  sm:w-1/2 px-8 sm:py-12 text-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="rounded-full sm:w-64 sm:h-64 mb-4 w-36 h-36"
        />
        <h1 className="sm:text-4xl text-2xl font-bold text-[#6D5D6E]">
          Aryan Pal
        </h1>
        <p className="text-lg sm:text:sm mt-2">Machine Learning Engineer</p>
      </div>
      <div className=" w-full sm:w-1/2 p-4">
        

        <h2 className=" flex justify-center text-2xl font-bold mb-4">
          About Me
        </h2>
        <p className="sm:text-lg text-sm text-center px-10">
               I am a machine learning engineer who is passionate about building
          intelligent systems to solve real-world problems. I have experience in
          designing and developing end-to-end machine learning pipelines, from
          data preprocessing and feature engineering to model training and
          deployment. 
          </p><p className="sm:text-lg text-sm text-center px-8">My areas of interest include computer vision, natural
          language processing, and deep learning. I enjoy working on challenging
          problems and learning new technologies.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FiGithub
              size={32}
              className="text-gray-500 hover:text-gray-700 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FiLinkedin
              size={32}
              className="text-gray-500 hover:text-gray-700 transition-all duration-200"
            />
          </a>
          <a
            href="https://www.kaggle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FiDatabase
              size={32}
              className="text-gray-500 hover:text-gray-700 transition-all duration-200"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter
              size={32}
              className="text-gray-500 hover:text-gray-700 transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
