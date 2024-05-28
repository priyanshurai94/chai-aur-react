import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const element = <FontAwesomeIcon icon={faPlay} />
  return (
    <div>
      <header className="bg-black text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          
            <span className="ml-3 text-xl">Ecowave</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={'/'} className="mr-5 hover:text-green-600">Home</Link>
            <Link to={'/About'} className="mr-5 hover:text-green-600">About</Link>
            <Link to={'/Features'} className="mr-5 hover:text-green-600">Features</Link>
            <Link to={'/Pages'} className="mr-5  hover:text-green-600">Pages</Link>
            <Link to={'/Contact'} className="mr-5  hover:text-green-600">Contact</Link>
          </nav>
          <button className="inline-flex items-center  bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl text-base mt-4 md:mt-0">
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
