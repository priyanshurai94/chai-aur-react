import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import dummy from '../../assets/Image/dummy.jpg'

const Main = () => {
  const element = <FontAwesomeIcon icon={faPlay} />
  return (
    <div>
      <section className="bg-black text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Effortlessly simplifying corporate payment has never been more seamless
            </h1>

            <p className="mb-8 leading-relaxed">
              Our cutting-edge software makes corporate payments a breeze. Say goodbye to complexity and hello to efficiency
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">
                Explore Courses
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-lg text-lg">
                <span className="flex items-center">{element} <span className="ml-2">See what it works</span></span>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={dummy}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
