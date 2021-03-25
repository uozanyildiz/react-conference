import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition, Menu } from '@headlessui/react';
const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <div className='bg-indigo-100'>
      <div className='flex mx-auto justify-between max-w-screen-2xl '>
        <Link to='/' className=''>
          <h3 className='text-4xl m-5 text-indigo-900'>ReactJS Antalya</h3>
        </Link>
        <div className='space-x-4 mr-5 my-auto hidden sm:flex text-indigo-900'>
          <Link to='/code' className=''>
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
            }}
            className='focus:outline-none'
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>
      </div>
      {/* Hamburger menu, hidden until small viewport */}
      <Menu>
        <Menu.Button>
          <Transition
            show={hamburgerMenu}
            enter='transition ease-out duration-300'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-300'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items static className='flex flex-col ml-5 pb-3 space-y-2'>
              <Menu.Item>
                <Link to='/code' className='menu-item'>
                  Code of Conduct
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/location' className='menu-item'>
                  Location
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/schedule' className='menu-item'>
                  Schedule
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu.Button>
      </Menu>
    </div>
  );
};

export default Navbar;
