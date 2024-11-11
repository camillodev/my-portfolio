import React from 'react';
import Navbar from './Navbar'; // Importe o componente Navbar

const Header: React.FC = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Meu Portfólio</h1>
        <Navbar /> {/* Use o componente Navbar aqui */}
      </div>
    </header>
  );
};

export default Header;
