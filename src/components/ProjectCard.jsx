import React from "react";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  imageSrc,
  skills,
  githubLink,
  websiteLink,
  startdate,
  enddate,
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleFullDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  const formattedDesc =
    description == null
      ? "No description provided."
      : description.length <= 150
      ? description
      : showFullDesc
      ? description
      : description.slice(0, 140) + " ...";



  return (
    <div className="  p-4 sm:p-6 lg:p-8">
      <div className="h-[450px] w-[300px] text-black bg-white overflow-hidden shadow-slate-300 shadow-xl rounded-xl border border-gray-100">
        <span className="bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4 p-5">
          <h3 className="text-base font-semibold sm:text-xl">{title}</h3>

          {imageSrc && (
            <div className="hidden sm:block sm:shrink-0">
              <img
                alt={title}
                src={imageSrc}
                className="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          )}
        </div>

        <div className=" px-5">
          <p className="max-w-[40ch] text-sm">{formattedDesc}</p>
          {description != null && description.length > 150 && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleFullDesc}
            >
              {showFullDesc ? "See less" : "See more"}
            </span>
          )}
          <div className="mt-2 flex flex-wrap">
            {skills && Array.isArray(skills) && (
              <div className="mr-4">
                <span className="text-lg font-medium text-gray-700">
                  Skills and Tools:
                </span>
                <div className="flex flex-wrap justify-start items-center mt-1">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="m-[3px] px-2 py-1 rounded bg-indigo-500 text-xs text-white font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {(githubLink || websiteLink) && (
              <div className="flex flex-row space-x-4 text-sm mt-[2px] absolute bottom-[74px] pr-0">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 bg-blue-100 rounded-lg flex items-center space-x-2 px-2 py-1 hover:text-blue-700"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 bg-blue-100 rounded-lg flex items-center space-x-2 px-2 py-1 hover:text-blue-700"
                  >
                    <FaExternalLinkAlt />
                    <span>Website</span>
                  </a>
                )}
              </div>
            )}
          </div>
          <div className=" absolute bottom-12">
          {startdate && enddate && (
            <div className=" mt-3 text-xs">
              <span className="text-sm font-medium">Duration:</span> {startdate}{" "}
              to{"-"}
              {enddate}
            </div>
            
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
