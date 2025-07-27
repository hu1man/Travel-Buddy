import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14 md:h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white rounded-full p-1 md:p-2 shadow-lg">
            <span className="text-lg md:text-xl font-bold select-none">TB</span>
          </div>
          <h1 className="text-blue-600 font-extrabold text-lg md:text-2xl select-none">
            Travel Buddy
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-semibold">
          <a
            href="https://www.uber.com/global/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Uber
          </a>
          <a
            href="https://pickme.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            PickMe
          </a>
          <a
            href="https://github.com/hu1man"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <a
            href="https://github.com/hu1man"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mr-4"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 pt-2 pb-4 space-y-2">
          <a
            href="https://www.uber.com/global/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Uber
          </a>
          <a
            href="https://pickme.lk/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            PickMe
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
