import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className='bg-indigo-100'>
      <div className='flex mx-auto justify-between max-w-screen-2xl'>
        <Link to='/' className=''>
          <h3 className='text-4xl m-5 text-indigo-900'>ReactJS Antalya</h3>
        </Link>
        <div className='space-x-4 mr-5 my-auto hidden sm:flex text-indigo-900'>
          <Link to='/code' className='flex-shrink-0'>
            Code of Conduct
          </Link>
          <Link to='/location' className=''>
            Location
          </Link>
          <Link to='/schedule' className=''>
            Schedule
          </Link>
        </div>
        <div className='sm:hidden mr-5 my-auto'>
          <button
            onClick={(e) => {
              setHamburgerMenu(!hamburgerMenu);
              console.log(hamburgerMenu);
            }}
            className='focus:outline-none'
          >
            <i class='fas fa-bars'></i>
          </button>
        </div>
      </div>
      {/* Hamburger menu, hidden until small viewport */}
      <div
        className={
          'sm:hidden flex flex-col ml-5 pb-3 space-y-2' +
          (hamburgerMenu ? '' : ' hidden')
        }
      >
        <Link
          to='/code'
          className='border-indigo-800 border-b-2 mr-auto hover:border-indigo-400 focus:text-indigo-800 focus:border-indigo-300'
        >
          Code of Conduct
        </Link>
        <Link
          to='/location'
          className='border-indigo-800 border-b-2 mr-auto hover:border-indigo-400 focus:text-indigo-800 focus:border-indigo-300'
        >
          Location
        </Link>
        <Link
          to='/schedule'
          className='border-indigo-800 border-b-2 mr-auto hover:border-indigo-400 focus:text-indigo-800 focus:border-indigo-300'
        >
          Schedule
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
