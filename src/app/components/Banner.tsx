import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
            <Stack direction='row' spacing={2}>
              <Button color='secondary'>Secondary</Button>
              <Button variant='contained' color='success'>
                Success
              </Button>
              <Button variant='outlined' color='error'>
                Error
              </Button>
            </Stack>
          </div>
          <div className='w-full'>
            <Image
              src='/rafael.png'
              alt='Rafael Camillo smilling'
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
