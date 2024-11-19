import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-surface-primary text-white p-4 mt-8'>
      <div className='container mx-auto text-center'>
        <p className='text-primary'>
          &copy; {new Date().getFullYear()} Rafael Camillo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
