import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Travel Buddy. All rights reserved.
      </p>
      <p>
        Developed by HU1MAN |{' '}
        <a
          href="https://github.com/hu1man"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>{' '}
        |{' '}
        <a
          href="mailto:vidundulmikavd@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Contact
        </a>
      </p>
    </footer>
  );
};

export default Footer;
