import { Button } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Banner: React.FC = ({}) => {
  const router = useRouter();
  return (
    <>
      <section className='w-full bg-surface-primary py-5 md:pb-0'>
        <div className='mx-auto  flex flex-col md:flex-row w-full  gap-6  justify-between items-center'>
          <div className='flex w-full flex-col justify-start text-left '>
            <h1 className='max-w-[800px] text-xl  2xl:text-4xl font-medium  text-white hidden md:block'>
              Rafael Camillo
            </h1>
            <h3 className='max-w-[800] text-5xl 2xl:text-7xl font-medium  text-primary text-left'>
              Senior Software Engineer
            </h3>
            <h3 className='max-w-[800px] text-2xl 2xl:text-5xl font-medium text-primary'>
              React & Node.js Guru
            </h3>
            <p className='text-white text-xl pt-4 lg:text-2xl 2xl:text-4xl'>
              Crafting high-performance web applications with a focus on user
              experience.
            </p>
            <div className='flex flex-col lg:flex-row gap-4 pb-2 justify-start pt-5 lg:pt-10 w-full'>
              <Button
                variant='contained'
                className='py-3 px-6 font-bold 2xl:text-xl rounded-3xl'
                onClick={() => router.push('/about')}
              >
                Explore My Profile
              </Button>
              <Button
                variant='outlined'
                className='py-3 px-6 font-bold 2xl:text-xl rounded-3xl'
                onClick={() => router.push('/blog')}
              >
                Visit Blog
              </Button>
            </div>
          </div>
          <div className='w-full mb-[-4px] hidden md:block aspect-w-1 aspect-h-1'>
            <Image
              src='/pic.svg'
              alt='Rafael Camillo smilling'
              width={400}
              height={500}
              className='object-cover w-full h-full'
              // sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
