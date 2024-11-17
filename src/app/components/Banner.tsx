import { Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const Banner: React.FC = ({}) => {
  return (
    <>
      <section className='w-full bg-surface-primary pb-20 pt-10'>
        <div className='mx-auto  flex w-full flex-col gap-6 px-5 lg:flex-row lg:justify-between items-center'>
          <div className='flex w-full flex-col items-start justify-center'>
            <h1 className='max-w-[475px] text-xl font-medium  text-white'>
              Rafael Camillo
            </h1>
            <h3 className='max-w-[475px] text-3xl font-medium  lg:text-5xl text-primary'>
              Senior Software Engineer
            </h3>
            <h3 className='max-w-[475px] text-3xl font-medium  lg:text-5xl text-primary'>
              React & Node.js Guru
            </h3>
            <p className='text-white lg:text-lg'>
              Crafting high-performance web applications with a focus on user
              experience.
            </p>
            <div className='flex gap-5 justify-start'>
              <Button variant='contained' color='primary'>
                Primary
              </Button>
              <Button variant='contained'>Contained</Button>
              <Button variant='outlined' color='primary'>
                Primary Outlined
              </Button>
              <Button sx={{ backgroundColor: 'red' }}>Teste</Button>
            </div>
          </div>
          <div className='w-full'>
            <Image
              src='/rafael.png'
              alt='Rafael Camillo smilling'
              width={500}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
