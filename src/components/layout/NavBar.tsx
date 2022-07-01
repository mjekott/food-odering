import { Link } from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import { useState } from 'react';

const appLinks = [
  {
    path: '/',
    name: 'Browse',
  },
  {
    path: '/singin',
    name: 'Signin',
  },
  {
    path: '/register',
    name: 'Register',
  },
  {
    path: '/cart',
    name: 'Cart',
  },
];

const NavBar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const toggleNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <nav className='border-b border-gray-300'>
      <div className='flex flex-col lg:flex-row lg:justify-between  lg:items-center container space-y-3 lg:space-y-0 lg:py-3 pb-3 '>
        <div className='flex justify-between items-center py-3 lg:py-0 '>
          <div>Order App</div>
          <button type='button' className='lg:hidden' onClick={toggleNav}>
            <MdReorder className='w-6 h-6' />
          </button>
        </div>
        <div className={`lg:order-3 ${openMobileNav ? 'block' : 'hidden'} lg:block`}>
          <input
            type='search'
            className='bg-gray-50 border border-gray-300 w-full rounded outline-none px-5 py-1'
            placeholder='Search items'
          />
        </div>
        <ul
          className={`flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-5 ${
            openMobileNav ? 'flex' : 'hidden'
          } lg:flex`}
        >
          {appLinks.map(({ name, path }) => (
            <Link to={path} key={name}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
