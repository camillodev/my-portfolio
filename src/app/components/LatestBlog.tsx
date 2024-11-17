import React from 'react';

const LatestBlog: React.FC = ({}) => {
  return (
    <div className='container mx-auto p-4'>
      <h1>Recent Blog Post</h1>
      <div className='flex flex-col md:flex-row gap-5 py-5'>
        <div className='basis-1/2'>
          <div className='blog w-full h-96 bg-white rounded-lg'></div>
        </div>
        <div className='basis-1/2 gap-3 flex flex-col'>
          <div className='blog w-full h-3/6 bg-white rounded-lg'></div>
          <div className='blog w-full h-3/6 bg-white rounded-lg'></div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
