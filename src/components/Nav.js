import React from 'react';

// import navigation data
import { navigationData } from '../data';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
          return (
            <li key={index} className='cursor-pointer'>
              <Link to={item.href} smooth={true} duration={500}>{item.name}</Link>
              
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
