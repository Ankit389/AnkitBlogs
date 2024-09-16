"use client"; // Ensure this directive is present if Footer uses client-side features

import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8 text-white border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <img src='/ap.png' alt='logo' className='w-8 h-auto' />
          <h2 className="font-bold text-xl">AnkitBlogs</h2>
        </div>

        {/* Community Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">Community</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Getting Started Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">Getting Started</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Introduction</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Code</a></li>
            <li><a href="#" className="hover:underline">Globals</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg mb-4">Web Technology</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Frontend Developer</a></li>
            <li><a href="#" className="hover:underline">Backend Developer</a></li>
            <li><a href="#" className="hover:underline">Web3</a></li>
            <li><a href="#" className="hover:underline">Full Stack Developer</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container mx-auto mt-8 flex flex-wrap justify-center gap-6 md:justify-end">
        <a href="https://github.com/Ankit389" aria-label="GitHub" className="hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ankit-pankaj-5b62ba26b/?originalSubdomain=in" aria-label="LinkedIn" className="hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.youtube.com/@ankit82992" aria-label="YouTube" className="hover:text-gray-400">
          <FaYoutube size={24} />
        </a>
        <a href="mailto:ankitpankaj702@gmail.com" aria-label="Email" className="hover:text-gray-400">
          <FaEnvelope size={24} />
        </a>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto mt-8 text-center">
        <a href="#" className='mx-1 hover:underline'>Terms of Service</a> | 
        <a href="#" className='mx-1 hover:underline'>Privacy Policy</a> | 
        <a href="#" className='mx-1 hover:underline'>Sitemap</a>
      </div>
    </footer>
  );
};

export default Footer;
