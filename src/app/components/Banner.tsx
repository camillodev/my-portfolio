import { Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const Banner: React.FC = ({}) => {
  return (
    <>
      <section className='w-full bg-surface-primary p-5 md:px-3 md:pb-0'>
        <div className='mx-auto  flex flex-col md:flex-row w-full  gap-6  justify-between items-center'>
          <div className='flex w-full flex-col items-center justify-center text-center '>
            <h1 className='max-w-[800px] text-xl  2xl:text-4xl font-medium  text-white hidden md:block'>
              Rafael Camillo
            </h1>
            <h3 className='max-w-[800] text-5xl 2xl:text-7xl font-medium  text-primary'>
              Senior Software Engineer
            </h3>
            <h3 className='max-w-[800px] text-2xl 2xl:text-5xl font-medium text-primary'>
              React & Node.js Guru
            </h3>
            <p className='text-white text-xl pt-4 lg:text-2xl 2xl:text-4xl'>
              Crafting high-performance web applications with a focus on user
              experience.
            </p>
            <div className='flex flex-col lg:flex-row gap-4 pb-2 justify-between pt-5 lg:pt-10'>
              <Button
                variant='contained'
                className='py-3 px-6 font-bold 2xl:text-xl'
              >
                Explore My Profile
              </Button>
              <Button
                variant='outlined'
                className='py-3 px-6 font-bold 2xl:text-xl'
              >
                Visit Blog
              </Button>
            </div>
          </div>
          <div className='w-full mb-[-4px] hidden md:block'>
            <Image
              src='/rafael.png'
              alt='Rafael Camillo smilling'
              width={900}
              height={900}
              layout='responsive'
              objectFit='contain'
              className='opacity-90'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
