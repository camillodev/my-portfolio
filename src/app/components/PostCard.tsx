/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';

interface PostProps {
  title: string;
  image: any;
  tags: string;
  isHorizontal?: boolean;
}

const PostCard: React.FC<PostProps> = ({
  title,
  image,
  tags,
  isHorizontal = false,
}) => {
  if (isHorizontal) {
    return (
      <div className='post lg:flex gap-6'>
        <div className='relative w-full h-60 rounded-lg aspect-video lg:w-3/6 lg:h-48 '>
          <Image
            src={`https:${image.fields.file.url}`}
            alt={title}
            fill
            className='rounded-lg object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        </div>
        <div className='description pt-4 lg:pt-1'>
          <p className='text-primary  font-bold'>
            {tags ? tags.toUpperCase() : ''}
          </p>
          <h1 className='text-2xl pt-2'>{title}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className='post h-full'>
        {image && (
          <div className='relative w-full h-4/6 rounded-lg'>
            <Image
              src={`https:${image.fields.file.url}`}
              alt={image.fields.title}
              fill
              className='rounded-lg object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            />
          </div>
        )}
        <p className='text-primary pt-4 pl-1 font-bold text-sm md:text-base'>
          {tags ? tags.toUpperCase() : ''}
        </p>
        <h1 className='text-xl md:text-3xl pl-1 pt-2 line-clamp-2'>{title}</h1>
      </div>
    );
  }
};

export default PostCard;
