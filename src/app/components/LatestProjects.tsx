import React from 'react';

const LatestProjects: React.FC = ({}) => {
  return (
    <div className='container mx-auto p-4'>
      <h1>Latest Projects</h1>
      <div className='flex flex-col  gap-10 my-10'>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
      </div>

      {/* <div className='grid grid-cols-3  gap-10 my-10'>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
        <div className='blog w-full h-80 bg-gray-500 rounded-lg'></div>
      </div> */}
    </div>
  );
};

export default LatestProjects;
