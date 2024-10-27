import React, { useState } from 'react';
import { FaLock, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">

      <div className="flex items-center text-2xl font-bold">
        <FaLock className="mr-2" />
        <span>UniFile</span>
      </div>


      <nav className={`flex-1 md:flex items-center justify-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <a href="/" className="mx-2 text-lg hover:text-gray-300">Home</a>
        <Link to="features" smooth={true} duration={500} className="mx-2 text-lg hover:text-gray-300 cur cursor-pointer">Features</Link>
        <a href="/about" className="mx-2 text-lg hover:text-gray-300">About</a>
        <a href="/contact" className="mx-2 text-lg hover:text-gray-300">Contact</a>
      </nav>

      <div className="hidden md:flex items-center space-x-2">
        <button className="px-4 py-2 bg-white text-blue-600 font-bold rounded hover:bg-gray-200">Login</button>
        <button className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600">Sign Up</button>
      </div>

   
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2 bg-gray-700 rounded-md py-4 w-full absolute top-16 left-0 z-10 transition-all duration-300 ease-in-out">
          <a href="/" className="text-lg text-white py-2 w-full text-center hover:bg-gray-600 rounded">Home</a>
          <a href="/features" className="text-lg text-white py-2 w-full text-center hover:bg-gray-600 rounded">Features</a>
          <a href="/about" className="text-lg text-white py-2 w-full text-center hover:bg-gray-600 rounded">About</a>
          <a href="/contact" className="text-lg text-white py-2 w-full text-center hover:bg-gray-600 rounded">Contact</a>
          <button className="w-full px-4 py-2 bg-white text-blue-600 font-bold rounded hover:bg-gray-200">Login</button>
          <button className="w-full px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600">Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default Header;
