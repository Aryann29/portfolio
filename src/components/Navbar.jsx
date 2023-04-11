
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-30 top-0 text-black bg-[#E7EFFF] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex-shrink-0">
            <Link
              activeClass="active"
              to="nav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg font-bold tracking-wider cursor-pointer"
            >
              <h1 className="text-4xl">Aryan Pal</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 cursor-pointer"
            >
              Resume
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="blogs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-black cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-3 cursor-pointer mb-2"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-3 cursor-pointer mb-2"
            onClick={toggleMobileMenu}
          >
            Resume
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-3 cursor-pointer mb-2"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="blogs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-3 cursor-pointer mb-2"
            onClick={toggleMobileMenu}
          >
            blogs
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mx-3 cursor-pointer mb-2"
            onClick={toggleMobileMenu}
          >
            contact
          </Link>
          {/* ... */}
        </div>
      )}


        </div>
  </nav>
);
  }        

export default Navbar;
