/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  image: any;
  tags: string;
  slug: string;
}

interface PostProps {
  post: Post;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { title, image, tags, slug } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      passHref
      className='no-underline text-inherit w-full min-h-60 md:min-h-40 h-full'
    >
      {image && (
        <div className='relative rounded-lg min-h-60 md:min-h-40 h-full'>
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            fill
            className='rounded-lg object-cover min-h-60 md:min-h-40 h-full'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
          />
        </div>
      )}
      <p className='text-primary pt-2 pl-1 font-bold text-sm md:text-base'>
        {tags ? tags.toUpperCase() : ''}
      </p>
      <h1 className='text-2xl pl-1  line-clamp-2'>{title}</h1>
    </Link>
  );
  // }
};

export default PostCard;
