// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import ProjectCard from "./ProjectCard";

// function ProjectList(props) {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 280,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false
//         }
//       },
//       {
//         breakpoint: 880,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           arrows: false
//         }
//       }],
//     prevArrow: (
//       <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-gray-900 hover:text-gray-600 transition-colors duration-300"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//     ),
//     nextArrow: (
//       <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6 text-gray-900 hover:text-gray-600 transition-colors duration-300"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     ),
//     responsive: [
//       {
//         breakpoint: 640, // small devices
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="h-screen w-full flex items-center justify-center">
//       <div className="my-8 p-14 px-10" style={{ height: "600px", width: "100%" }}>
//         <Slider {...settings}>
//           {props.projects.map((project, index) => (
//             <div key={index} className="px-4">
//               <div className="flex items-center justify-center h-full">
//                 <ProjectCard
//                   title={project.title}
//                   description={project.description}
//                   imageSrc={project.imageSrc}
//                   skills={project.skills}
//                   startdate={project.startdate}
//                   enddate={project.enddate}
//                   githubLink={project.githubLink}
//                   websiteLink={project.websiteLink}
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default ProjectList;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";

function ProjectList(props) {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: (
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900 hover:text-gray-600 transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-900 hover:text-gray-600 transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="my-8 p-14 px-10" style={{ height: "600px", width: "100%" }}>
        <Slider {...settings}>
          {props.projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  skills={project.skills}
                  startdate={project.startdate}
                  enddate={project.enddate}
                  githubLink={project.githubLink}
                  websiteLink={project.websiteLink}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProjectList;


