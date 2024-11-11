import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className='flex space-x-4'>
        <li>
          <Link href='/' className='hover:text-gray-300'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-gray-300'>
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link href='/projects' className='hover:text-gray-300'>
            Projetos
          </Link>
        </li>
        <li>
          <Link href='/blog' className='hover:text-gray-300'>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
