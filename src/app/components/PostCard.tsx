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
  isHorizontal?: boolean;
}

const PostCard: React.FC<PostProps> = ({ post, isHorizontal = false }) => {
  const { title, image, tags, slug } = post;
  console.log(`image url: ${image.fields.file.url}`);
  // if (isHorizontal) {
  //   return (
  //     <Link
  //       href={`/blog/${slug}`}
  //       passHref
  //       className='no-underline text-inherit h-full w-full flex flex-col'
  //     >
  //       <div className='relative w-full h-4/5 rounded-lg  '>
  //         <Image
  //           src={`https:${image.fields.file.url}`}
  //           alt={title}
  //           fill
  //           className='rounded-lg object-cover'
  //           sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
  //         />
  //       </div>
  //       <div className='description pt-4 lg:pt-1'>
  //         <p className='text-primary  font-bold'>
  //           {tags ? tags.toUpperCase() : ''}
  //         </p>
  //         <h1 className='text-2xl pt-2'>{title}</h1>
  //       </div>
  //     </Link>
  //   );
  // } else {
  return (
    <Link
      href={`/blog/${slug}`}
      passHref
      className='no-underline text-inherit w-full min-h-36 h-4/6'
    >
      {image && (
        <div className='relative rounded-lg min-h-36'>
          <Image
            src={`https:${image.fields.file.url}`}
            alt={image.fields.title}
            fill
            className='rounded-lg object-cover min-h-36 h-full'
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
