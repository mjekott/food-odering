import { Link } from 'react-router-dom';
import { MdReorder } from 'react-icons/md';
import { useState } from 'react';

const appLinks = [
  {
    path: '/browse',
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
      <div className='container flex flex-col space-y-3  pb-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:py-3 '>
        <div className='flex items-center justify-between py-3 lg:py-0 '>
          <Link to='/'>Order App</Link>
          <button type='button' className='lg:hidden' onClick={toggleNav}>
            <MdReorder className='h-6 w-6' />
          </button>
        </div>
        <div className={`lg:order-3 ${openMobileNav ? 'block' : 'hidden'} lg:block`}>
          <input
            type='search'
            className='w-full rounded border border-gray-300 bg-gray-50 px-5 py-1 outline-none'
            placeholder='Search items'
          />
        </div>
        <ul
          className={`flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-5 ${
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
