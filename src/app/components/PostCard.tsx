import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import Link from 'next/link';

interface PostProps {
  post: Entry<any>;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { title, slug, content, image } = post.fields;

  return (
    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
      {image && (
        <img
          src={image.fields.file.url}
          alt={title}
          className='w-full h-48 object-cover'
        />
      )}
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        <div className='prose'>{documentToReactComponents(content)}</div>
        <Link
          href={`/blog/${slug}`}
          className='mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
